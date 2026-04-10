@AGENTS.md

# GeoMix — Key Findings

## Leaflet in Next.js
- Import Leaflet at the **top level** (not dynamically) — the component is already SSR-disabled via `next/dynamic`. Dynamic import causes a race where the GeoJSON effect runs before the map is ready.
- Wrap the component with `dynamic(() => import(...), { ssr: false })` in the page file.
- Do **not** use `preferCanvas: true` — the Canvas renderer fires async draws after `map.remove()`, causing a `clearRect` crash on unmount. SVG renderer is safe.
- Guard against double-init in Strict Mode: check `mapContainerRef.current._leaflet_id` before calling `L.map()`.

## fitBounds on mobile
- **`zoomSnap: 0`** is required. The default `zoomSnap: 1` floors fractional zoom levels (e.g. 5.61 → 5), making Greece fill only ~60% of the map area. With `zoomSnap: 0` Leaflet picks the exact fractional zoom and the map fills the container edge-to-edge.
- Use a **ResizeObserver on the flex-1 wrapper** (not the `absolute inset-0` Leaflet container) to detect real height. Store size in both state (triggers effect) and a ref (accessible without deps).
- Call `doFit` from **both** the containerSize effect and the end of the GeoJSON effect — they can race: ResizeObserver may fire before or after the GeoJSON layer is ready.
- Call `map.invalidateSize()` **before** `layer.getBounds()` / `map.fitBounds()` so Leaflet re-reads the container's current pixel dimensions.

## Stale closures in Leaflet event handlers
- Leaflet's `onEachFeature` click handler captures values at layer-creation time. Use refs that mirror state to avoid stale reads:
  ```ts
  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;
  ```

## Data pipeline
- **Peripheries**: Natural Earth 10m shapefile → `scripts/extract_regions.py` → `public/data/greece-regions.geojson`. IDs must match `questions-greece.json` (canonical: `ATTICA`, `CRETE`, `SOUTH_AEGEAN`, etc.).
- **Νομοί**: `scripts/fetch_click_that_hood.py` → `public/data/greece-nomoi.geojson` + `questions-nomoi.json`. Source: click_that_hood GitHub repo. Excludes Mount Athos.
- GeoJSON IDs in the data file and answer values in questions JSON **must be identical** — mismatches cause silent wrong-answer bugs.
