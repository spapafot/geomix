# 🌍 GeoMix – Implementation Plan (MVP)

## 🎯 Goal

Build a simple, static geography quiz game where:

- Users click regions on a map (starting with Greece)
- No login, no backend
- Questions served via static JSON
- Map rendered using GeoJSON + Leaflet
- Deployed as static site (Next.js export)

---

# 🧱 1. Tech Stack

- **Frontend:** Next.js (static export)
- **Map rendering:** Leaflet
- **Data format:** GeoJSON
- **Hosting:** S3 + CloudFront (or Vercel static)
- **Data source:** Natural Earth (Admin 0 & Admin 1)

---

# 🌍 2. Data Sources

## Global Regions (Admin 1)

Use Natural Earth Admin 1 dataset (states/provinces)

Example dataset:

- https://datahub.io/core/geo-ne-admin1 ([DataHub][1])

Fields available:

- `name` → region name
- `admin` → country name
- `iso_3166_2` → region code
- `adm0_a3` → country code

---

# 🇬🇷 3. Extract Greece Data

## Step 1: Filter GeoJSON

```js
const greeceRegions = geojson.features.filter(
  (f) => f.properties.admin === "Greece",
);
```

## Step 2: Normalize properties

Convert Natural Earth properties into clean structure:

```json
{
  "id": "ATTICA",
  "name": "Attica"
}
```

Mapping example:

```js
const normalized = greeceRegions.map((f) => ({
  type: "Feature",
  geometry: f.geometry,
  properties: {
    id: f.properties.name.toUpperCase().replace(/\s/g, "_"),
    name: f.properties.name,
  },
}));
```

---

# ✂️ 4. Optimize GeoJSON

## Tool: mapshaper.org

Steps:

1. Import GeoJSON
2. Filter: `admin == "Greece"`
3. Simplify (5–10%)
4. Export as `greece-regions.geojson`

Goal:

- Reduce file size
- Improve performance

---

# 📁 5. Project Structure

```
/public
  /data
    greece-regions.geojson
    questions-greece.json

/src
  /components
    MapQuiz.tsx
  /lib
    loadData.ts
  /pages
    index.tsx
```

---

# 📦 6. Question Format

```json
{
  "id": "greece_regions",
  "questions": [
    {
      "type": "map",
      "prompt": "Click on Attica",
      "answer": "ATTICA"
    }
  ]
}
```

---

# 🗺️ 7. Map Component (Leaflet)

## Core Logic

```js
L.geoJSON(geojson, {
  style: () => ({
    color: "#333",
    weight: 1,
    fillColor: "#ccc",
    fillOpacity: 0.7,
  }),

  onEachFeature: (feature, layer) => {
    layer.on({
      mouseover: () => {
        layer.setStyle({ fillColor: "orange" });
      },

      mouseout: () => {
        layer.setStyle({ fillColor: "#ccc" });
      },

      click: () => {
        const id = feature.properties.id;

        if (id === currentAnswer) {
          layer.setStyle({ fillColor: "green" });
          onCorrect();
        } else {
          layer.setStyle({ fillColor: "red" });
          onWrong();
        }
      },
    });
  },
}).addTo(map);
```

---

# 🎮 8. Game Modes (MVP → Future)

## MVP

- ✅ “Click the region” (Greece)

## Next Features

- Timed mode (60 seconds)
- Streak mode
- Reverse quiz (highlight region → choose name)
- Europe expansion
- World map

---

# 🔄 9. Game Flow

```
Load page
  ↓
Fetch questions.json
  ↓
Fetch geojson
  ↓
Pick random question
  ↓
User clicks region
  ↓
Validate answer
  ↓
Show feedback
  ↓
Next question
```

---

# ⚡ 10. Performance Considerations

- Simplify GeoJSON (critical)
- Lazy load datasets
- Avoid re-rendering map
- Use `preferCanvas: true` if needed
- Keep GeoJSON < ~200KB if possible

---

# 💰 11. Monetization (Optional)

## Google AdSense

- Add after MVP
- Ensure:
  - Ads not near map (avoid misclicks)
  - Mobile-friendly layout
  - Clear separation of UI

---

# 🚀 12. Deployment

## Static Export

```bash
next build
next export
```

## Host:

- S3 + CloudFront
- or Vercel

---

# 🧠 13. Future Enhancements

- Add leaderboard (Lambda + DynamoDB)
- Add difficulty levels
- Add sound effects
- Add animations
- Add mobile gestures

---

# ✅ MVP Checklist

- [ ] Greece GeoJSON extracted & optimized
- [ ] Questions JSON created
- [ ] Leaflet map renders regions
- [ ] Click interaction works
- [ ] Answer validation works
- [ ] Basic UI (question + feedback)
- [ ] Static deployment working

---

# 🏁 Summary

- Use Natural Earth → filter Greece
- Use GeoJSON + Leaflet (no Google Maps)
- Serve static JSON (no backend)
- Keep it simple and fast
- Expand later if traction grows

---

[1]: https://datahub.io/core/geo-ne-admin1?utm_source=chatgpt.com "GeoBoundaries Admin1 Polygons as GeoJSON"
