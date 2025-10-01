// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import PersonalInfoForm from "./components/PersonalInfoForm";
import ResultCards from "./components/ResultCards";
import NameAnalysis from "./components/NameAnalysis";
import CorrectionAdvice from "./components/CorrectionAdvice";
import PersonalityAnalysis from "./components/PersonalityAnalysis";
import DetailedAnalysis from "./components/DetailedAnalysis";
import Footer from "./components/Footer";
import NameDOBAnalysis from "./components/NameDOBAnalysis";


export default function App() {
  // data will hold calculation results
  const [data, setData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        <PersonalInfoForm onCalculate={(result) => setData(result)} />
        {data && (
          <>
            <ResultCards data={data} />
            <NameAnalysis data={data} />
            <NameDOBAnalysis
              namank={data.namank}
              moolank={data.moolank}
              bhagyank={data.bhagyank}
            />
            <CorrectionAdvice data={data} />
            <PersonalityAnalysis data={data} />
            <DetailedAnalysis data={data} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
