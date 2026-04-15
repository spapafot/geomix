# Map Projection Options

Pass via the `projection` prop on `MapQuiz` or `MapQuizMC`.  
Optionally combine with `projectionRotate={[rotateLon, rotateLat]}` to shift the center.

---

## Available Projections

### `naturalEarth` *(default)*
A pseudo-cylindrical projection. Looks balanced and natural — continents appear close to their true shape and size. Good general-purpose choice.

**Best for:** Europe, Asia, Africa, Oceania, world-scale maps.

---

### `mercator`
The classic web map projection. Preserves angles/shapes but heavily distorts area near the poles — Greenland looks as big as Africa.

**Best for:** Small regions at mid-latitudes (e.g. Greece, small island groups). Avoid for whole continents.

---

### `azimuthalEqualArea`
Preserves area accurately. Projected from a single point outward. Shapes at the edges get distorted but relative sizes are correct.

**Best for:** Polar regions, or when accurate area comparison matters.

---

### `conicEqualArea`
A conic projection that preserves area. Works well for regions that are wider east-west than they are tall.

**Best for:** North America, Russia, broad mid-latitude regions.

---

### `equirectangular`
The simplest projection — longitude and latitude are mapped directly to x/y. Fast but distorts shapes and sizes significantly at high latitudes.

**Best for:** Quick debugging, or regions near the equator.

---

## Rotation

Use `projectionRotate` to shift the center of the projection away from 0°E.

```tsx
projectionRotate={[rotateLon, rotateLat]}
// rotateLon: negative = shift center eastward
// e.g. [-150, 0] centers at 150°E (good for Oceania/Pacific)
// e.g. [-20, 0]  centers at 20°E  (good for Africa)
// e.g. [60, 0]   centers at 60°W  (good for Americas)
```

**Always rotate before `fitExtent` — the component handles this automatically when `projectionRotate` is passed.**

---

## Current Quiz Assignments

| Quiz group       | Projection       | Rotate       |
|------------------|------------------|--------------|
| Greece           | `naturalEarth`   | —            |
| Europe           | `naturalEarth`   | —            |
| Asia             | `naturalEarth`   | —            |
| Africa           | `naturalEarth`   | —            |
| North America    | `naturalEarth`   | —            |
| South America    | `naturalEarth`   | —            |
| Oceania          | `naturalEarth`   | `[-150, 0]`  |
