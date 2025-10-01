// src/components/PersonalityAnalysis.jsx
import React from "react";

const PROFILES = {
    1: {
        positive: ["Leadership", "Independence", "Ambition"],
        negative: ["Ego", "Stubbornness"]
    },
    2: {
        positive: ["Diplomacy", "Cooperation"],
        negative: ["Over-sensitivity", "Indecision"]
    },
    3: {
        positive: ["Creativity", "Communication"],
        negative: ["Scattering energy", "Superficiality"]
    },
    4: {
        positive: ["Practicality", "Discipline", "Organization"],
        negative: ["Rigidity", "Work-related Stress", "Excessive Materialism"]
    },
    5: {
        positive: ["Adaptability", "Freedom-loving", "Curiosity"],
        negative: ["Restlessness", "Inconsistency"]
    },
    6: {
        positive: ["Responsibility", "Service", "Harmony"],
        negative: ["Self-sacrifice", "Worrying"]
    },
    7: {
        positive: ["Intuition", "Research", "Spirituality"],
        negative: ["Isolation", "Over-analysis"]
    },
    8: {
        positive: ["Power", "Business Acumen", "Leadership"],
        negative: ["Ruthless Behavior", "Excessive Materialism"]
    },
    9: {
        positive: ["Courage", "Passion", "Humanitarian Nature", "Strong Determination"],
        negative: ["Aggressiveness", "Impulsiveness", "Over-dominance"]
    }
    

};

export default function PersonalityAnalysis({ data }) {
    const num = data?.namank || 0;
    const profile = PROFILES[num] || PROFILES[4];

    return (
        <div className="bg-blue-100 shadow rounded-lg p-5">
            <h2 className="text-lg font-semibold mb-3">Personality Effects Analysis</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-green-600 font-semibold mb-2">✅ Positive Effects</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                        {profile.positive.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="text-red-600 font-semibold mb-2">⚠️ Negative Effects</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                        {profile.negative.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
