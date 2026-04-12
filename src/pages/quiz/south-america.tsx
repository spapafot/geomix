import Head from "next/head";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { loadGeoJSON, loadQuestions, shuffleArray } from "@/lib/loadData";
import type { QuizData, RegionProperties } from "@/lib/loadData";

const MapQuiz = dynamic(() => import("@/components/MapQuiz"), { ssr: false });

export default function SouthAmericaQuizPage() {
  const [geojson, setGeojson] = useState<GeoJSON.FeatureCollection<GeoJSON.Geometry, RegionProperties> | null>(null);
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      loadGeoJSON("south-america.geojson"),
      loadQuestions("questions-south-america.json"),
    ])
      .then(([geo, quiz]) => {
        setGeojson(geo);
        setQuizData({ ...quiz, questions: shuffleArray(quiz.questions) });
      })
      .catch((e) => setError(String(e)));
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950 text-red-400 text-sm">
        Σφάλμα φόρτωσης: {error}
      </div>
    );
  }

  if (!geojson || !quizData) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950 text-slate-400">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-lime-400 mx-auto mb-3" />
          <p className="text-sm">Φόρτωση χάρτη Νότιας Αμερικής…</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Χώρες Νότιας Αμερικής — Κουίζ Γεωγραφίας | GeoMix</title>
        <meta name="description" content="Βρες τις χώρες της Νότιας Αμερικής στον χάρτη. Από τη Βραζιλία ως την Αργεντινή — δωρεάν διαδραστικό κουίζ γεωγραφίας." />
        <meta name="keywords" content="χώρες νότιας αμερικής, κουίζ νότιας αμερικής, γεωγραφία νότιας αμερικής, βραζιλία, αργεντινή, εκπαιδευτικό παιχνίδι" />
        <meta property="og:title" content="Χώρες Νότιας Αμερικής — Κουίζ Γεωγραφίας | GeoMix" />
        <meta property="og:description" content="Βρες τις χώρες της Νότιας Αμερικής στον χάρτη. Δωρεάν και διαδραστικό." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="el_GR" />
        <link rel="canonical" href="https://geomix.gr/quiz/south-america" />
      </Head>
      <MapQuiz
        geojson={geojson}
        questions={quizData.questions}
        title="GeoMix — Νότια Αμερική"
        flag="🌎"
        accentColor="lime"
      />
    </>
  );
}
