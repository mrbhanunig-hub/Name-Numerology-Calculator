// src/components/DetailedAnalysis.jsx
import React from "react";

const DETAILS = {
    1: {
        traits: "Independent, Leader, Confident",
        careers: "Entrepreneur, Manager, High athority, CEO", 
        lucky: "Sunday, Yellow, Number 2, 5, 9"
    },
    2: {
        traits: "Best friend, Emotional, Good Listener",
        careers: "Counselor,Lawyer, Creativity",
        lucky: "Monday, Silver, Number 1, 3, 5"
    },
    3: {
        traits: "Creative, Knowledgeable, Expressive",
        careers: "Writer, Teaching, Accounting",
        lucky: "Thursday, Yellow, Number 1, 2, 5"
    },
    4: {
        traits: "Practical, Organized, Disciplined",
        careers: "Scientist, Film Industry, Management, Astrologer",
        lucky: "Wednesday, Light Blue, Number 1, 5, 6, 7"
    },
    5: {
        traits: "Adventurous, Stable, Independent",
        careers: "Bussiness, Finance Advisor, Banker",
        lucky: "Wednesday, Green, Number 1, 2, 3, 6"
    },
    6: {
        traits: "Sacrificers, Like Comfort & Luxury, Caring",
        careers: "Creative, Business, Social Work",
        lucky: "Friday, Blue, Red, Number 1, 5, 7"
    },
    7: {
        traits: "Analytical, Introspective",
        careers: "Research, Detective, Spiritual pursuits",
        lucky: "Sunday, White, Yellow, Number 1, 3, 5, 6"
    },
    8: {
        traits: "Powerful, Hard Worker, Business-minded",
        careers: "Business, Law, Finance, Real Estate",
        lucky: "Saturday, Dark Blue, Number 5, 3, 6, 7"
    },
    9: {
        traits: "Courageous, Passionate, Humanitarian, Strong-willed",
        careers: "Defense, Sports, Surgery, Politics, Social Work",
        lucky: "Tuesday, Red, Number 3, 6, 9"
    }    
};

export default function DetailedAnalysis({ data }) {
    const n = data?.namank || 4;
    const info = DETAILS[n] || DETAILS[4];

    return (
        <div className="bg-emerald-100 shadow rounded-lg p-5">
            <h2 className="text-lg font-semibold mb-3">Detailed Numerology Analysis</h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-semibold">Personality Traits</h3>
                    <p className="text-sm text-gray-700">{info.traits}</p>
                </div>

                <div>
                    <h3 className="font-semibold">Career Suggestions</h3>
                    <p className="text-sm text-gray-700">{info.careers}</p>
                </div>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold">Lucky Elements</h3>
                <p className="text-sm text-gray-700">{info.lucky}</p>
            </div>
        </div>
    );
}
