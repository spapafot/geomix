export interface RegionProperties {
  id: string;
  name: string;
  capital?: string;
  iso2?: string;
  periphery?: string;
}

export interface Question {
  type: string;
  prompt: string;
  answer: string;
  image_url?: string;
}

export interface QuizData {
  id: string;
  questions: Question[];
}

function normalizeBasePath(path: string): string {
  if (!path || path === "/") return "";
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}` : "";
}

function detectBasePathFromNextAssets(): string {
  if (typeof document === "undefined") return "";
  const nextScript = document.querySelector<HTMLScriptElement>('script[src*="/_next/"]');
  if (!nextScript?.src) return "";

  try {
    const url = new URL(nextScript.src, window.location.origin);
    const marker = "/_next/";
    const markerIndex = url.pathname.indexOf(marker);
    if (markerIndex <= 0) return "";
    return normalizeBasePath(url.pathname.slice(0, markerIndex));
  } catch {
    return "";
  }
}

function getBasePath(): string {
  const fromEnv = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? "");
  if (fromEnv) return fromEnv;
  return detectBasePathFromNextAssets();
}

function getDataUrl(file: string): string {
  return `${getBasePath()}/data/${file}`;
}

async function fetchJson<T>(file: string): Promise<T> {
  const url = getDataUrl(file);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} while loading ${url}`);
  }
  return res.json() as Promise<T>;
}

export async function loadGeoJSON(
  file = "greece-regions.geojson",
): Promise<GeoJSON.FeatureCollection<GeoJSON.Geometry, RegionProperties>> {
  return fetchJson<GeoJSON.FeatureCollection<GeoJSON.Geometry, RegionProperties>>(file);
}

export async function loadQuestions(file = "questions-greece.json"): Promise<QuizData> {
  return fetchJson<QuizData>(file);
}

export function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
