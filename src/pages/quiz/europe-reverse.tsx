import Head from "next/head";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { loadGeoJSON } from "@/lib/loadData";
import type { RegionProperties } from "@/lib/loadData";

const MapQuizMC = dynamic(() => import("@/components/MapQuizMC"), { ssr: false });

export default function EuropeReversePage() {
  const [geojson, setGeojson] = useState<GeoJSON.FeatureCollection<GeoJSON.Geometry, RegionProperties> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadGeoJSON("europe.geojson")
      .then(setGeojson)
      .catch((e) => setError(String(e)));
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950 text-red-400 text-sm">
        Σφάλμα φόρτωσης: {error}
      </div>
    );
  }

  if (!geojson) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950 text-slate-400">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-400 mx-auto mb-3" />
          <p className="text-sm">Φόρτωση χάρτη Ευρώπης…</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Αντίστροφο Κουίζ Ευρώπης — Γεωγραφία | GeoMix</title>
        <meta name="description" content="Βρες τη χώρα που είναι επισημασμένη στον χάρτη! Αντίστροφο και κουίζ σημαιών Ευρώπης. Δωρεάν και διαδραστικό." />
        <meta name="keywords" content="αντίστροφο κουίζ ευρώπης, σημαίες ευρώπης, γεωγραφία ευρώπης, εκπαιδευτικό παιχνίδι" />
        <meta property="og:title" content="Αντίστροφο Κουίζ Ευρώπης | GeoMix" />
        <meta property="og:description" content="Επίλεξε τη σωστή χώρα ή σημαία από τις 4 επιλογές. Δωρεάν διαδραστικό κουίζ Ευρώπης." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/quiz/europe-reverse" />
      </Head>
      <MapQuizMC
        geojson={geojson}
        title="GeoMix — Ευρώπη"
        flag="🌍"
        projection="azimuthalEqualArea"
      />
    </>
  );
}
