import React, { useState } from "react";
import { calcBhagyankFromISO, calcMoolankFromISO, calcNameNumber } from "../utils/numerology";

export default function PersonalInfoForm({ onCalculate, onReset }) {
    const _params = new URLSearchParams(window.location.search);
    const [first, setFirst] = useState(_params.get("first") || "");
    const [middle, setMiddle] = useState(_params.get("middle") || "");
    const [last, setLast] = useState(_params.get("last") || "");
    const [dob, setDob] = useState(_params.get("dob_iso") || "");

    function handleCalculate(e) {
        e.preventDefault();

        if (!first || !dob) return; // required check

        const fullname = [first, middle, last].filter(Boolean).join(" ");
        const nameCalc = calcNameNumber(fullname);
        const firstCalc = calcNameNumber(first);
        const middleCalc = calcNameNumber(middle);
        const lastCalc = calcNameNumber(last);
        const moolank = calcMoolankFromISO(dob);
        const bhagyank = calcBhagyankFromISO(dob);

        const payload = {
            fullname,
            moolank,
            bhagyank,
            namank: nameCalc.reduced,
            nameTotalRaw: nameCalc.total,
            breakdown: nameCalc.breakdown,
            firstName: { text: first, raw: firstCalc.total, reduced: firstCalc.reduced },
            middleName: { text: middle, raw: middleCalc.total, reduced: middleCalc.reduced },
            lastName: { text: last, raw: lastCalc.total, reduced: lastCalc.reduced },
        };

        onCalculate(payload);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function handleReset() {
        setFirst("");
        setMiddle("");
        setLast("");
        setDob("");
        if (onReset) onReset(); // parent को भी reset की सूचना
    }

    return (
        <form className="bg-white rounded-lg shadow p-4" onSubmit={handleCalculate}>
            <div className="bg-orange-500 rounded-t-md p-4 text-white font-semibold flex items-center gap-2">
                <span>🔷</span> Enter Personal Information
            </div>

            <div className="p-4 grid gap-3 md:grid-cols-3">
                <div>
                    <label className="text-sm block mb-1">First Name *</label>
                    <input
                        value={first}
                        onChange={(e) => setFirst(e.target.value.replace(/[^A-Za-z]/g, ""))} // no space, no special chars
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
                            // check year length
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
