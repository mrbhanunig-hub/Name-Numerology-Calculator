import React, { useState, useEffect } from "react";
import { calcBhagyankFromISO, calcMoolankFromISO, calcNameNumber } from "../utils/numerology";

export default function PersonalInfoForm({ onCalculate, onReset }) {
    const _params = new URLSearchParams(window.location.search);
    const [first, setFirst] = useState(_params.get("first") || "");
    const [middle, setMiddle] = useState(_params.get("middle") || "");
    const [last, setLast] = useState(_params.get("last") || "");
    const [dob, setDob] = useState(_params.get("dob_iso") || "");

    // कोर गणना फ़ंक्शन (फॉर्म सबमिशन और ऑटो-कैलकुलेशन दोनों के लिए)
    function executeCalculation(fVal, mVal, lVal, dobVal) {
        if (!fVal || !dobVal) return;

        const fullname = [fVal, mVal, lVal].filter(Boolean).join(" ");
        const nameCalc = calcNameNumber(fullname);
        const firstCalc = calcNameNumber(fVal);
        const middleCalc = calcNameNumber(mVal);
        const lastCalc = calcNameNumber(lVal);
        const moolank = calcMoolankFromISO(dobVal);
        const bhagyank = calcBhagyankFromISO(dobVal);

        const payload = {
            fullname,
            moolank,
            bhagyank,
            namank: nameCalc.reduced,
            nameTotalRaw: nameCalc.total,
            breakdown: nameCalc.breakdown,
            firstName: { text: fVal, raw: firstCalc.total, reduced: firstCalc.reduced },
            middleName: { text: mVal, raw: middleCalc.total, reduced: middleCalc.reduced },
            lastName: { text: lVal, raw: lastCalc.total, reduced: lastCalc.reduced },
        };

        onCalculate(payload);
    }

    function handleCalculate(e) {
        if (e) e.preventDefault();
        executeCalculation(first, middle, last, dob);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function handleReset() {
        setFirst("");
        setMiddle("");
        setLast("");
        setDob("");
        if (onReset) onReset();
    }

    // BirthProfile Integration
    useEffect(() => {
        if (window.BirthProfile) {
            // 1. इंजन इनिशियलाइज़ करें
            window.BirthProfile.init();

            // 2. प्रोफाइल पिकर ड्रॉपडाउन को ऊपर जोड़ें
            if (window.BirthProfile.attachProfileSelector) {
                window.BirthProfile.attachProfileSelector("personal-info-profile-picker");
            }

            // 3. एक्टिव प्रोफाइल से डेटा सिंक और स्वतः गणना
            function syncProfile() {
                const p = window.BirthProfile.get();
                if (p) {
                    let fName = "";
                    let mName = "";
                    let lName = "";

                    // नाम को First, Middle और Last Name में बाँटें
                    if (p.name) {
                        const parts = p.name.trim().split(/\s+/);
                        if (parts.length === 1) {
                            fName = parts[0].replace(/[^A-Za-z]/g, "");
                        } else if (parts.length === 2) {
                            fName = parts[0].replace(/[^A-Za-z]/g, "");
                            lName = parts[1].replace(/[^A-Za-z]/g, "");
                        } else if (parts.length >= 3) {
                            fName = parts[0].replace(/[^A-Za-z]/g, "");
                            mName = parts.slice(1, -1).join("").replace(/[^A-Za-z]/g, "");
                            lName = parts[parts.length - 1].replace(/[^A-Za-z]/g, "");
                        }
                    }

                    // जन्मतिथि को YYYY-MM-DD में बदलें
                    let dobStr = "";
                    if (p.year && p.month && p.day) {
                        const y = String(p.year);
                        const m = String(p.month).padStart(2, "0");
                        const d = String(p.day).padStart(2, "0");
                        dobStr = `${y}-${m}-${d}`;
                    }

                    // स्टेट्स अपडेट करें
                    setFirst(fName);
                    setMiddle(mName);
                    setLast(lName);
                    setDob(dobStr);

                    // अगर नाम और जन्मतिथि दोनों मौजूद हैं, तो तुरंत गणना निष्पादित करें
                    if (fName && dobStr) {
                        executeCalculation(fName, mName, lName, dobStr);
                    }
                }
            }

            syncProfile();

            // प्रोफाइल बदलने पर तुरंत अपडेट करें
            const picker = document.getElementById("cc-app-profile-picker");
            if (picker) {
                picker.addEventListener("change", () => {
                    setTimeout(syncProfile, 50);
                });
            }
        }
    }, [onCalculate]);

    return (
        <form className="bg-white rounded-lg shadow p-4" onSubmit={handleCalculate}>
            {/* Profile Picker Dropdown Container */}
            <div id="personal-info-profile-picker" className="mb-4"></div>

            <div className="bg-orange-500 rounded-t-md p-4 text-white font-semibold flex items-center gap-2">
                <span>🔷</span> Enter Personal Information
            </div>

            <div className="p-4 grid gap-3 md:grid-cols-3">
                <div>
                    <label className="text-sm block mb-1">First Name *</label>
                    <input
                        value={first}
                        onChange={(e) => setFirst(e.target.value.replace(/[^A-Za-z]/g, ""))}
                        placeholder="First Name"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="text-sm block mb-1">Middle Name</label>
                    <input
                        value={middle}
                        onChange={(e) => setMiddle(e.target.value.replace(/[^A-Za-z]/g, ""))}
                        placeholder="Middle Name"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="text-sm block mb-1">Last Name</label>
                    <input
                        value={last}
                        onChange={(e) => setLast(e.target.value.replace(/[^A-Za-z]/g, ""))}
                        placeholder="Last Name"
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="md:col-span-3">
                    <label className="text-sm block mb-1">Birth Date *</label>
                    <input
                        value={dob}
                        onChange={(e) => {
                            const val = e.target.value;
                            const year = val.split("-")[0];
                            if (year.length <= 4) {
                                setDob(val);
                            }
                        }}
                        type="date"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="md:col-span-3 flex gap-3">
                    <button
                        type="submit"
                        disabled={!first || !dob}
                        className="mt-2 w-full bg-orange-500 text-white rounded px-4 py-2 shadow disabled:opacity-50"
                    >
                        🔒 Calculate Numerology
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="mt-2 w-32 bg-gray-100 text-gray-700 rounded px-4 py-2"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </form>
    );
}
