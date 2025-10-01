// src/utils/numerology.js

// Chaldean mapping (common mapping)
export const CHALDEAN_MAP = {
    A: 1, I: 1, J: 1, Q: 1, Y: 1,
    B: 2, K: 2, R: 2,
    C: 3, G: 3, L: 3, S: 3,
    D: 4, M: 4, T: 4,
    E: 5, H: 5, N: 5, X: 5,
    U: 6, V: 6, W: 6,
    O: 7, Z: 7,
    F: 8, P: 8
};

// reduce number to single digit (optionally keep master numbers 11 & 22)
export function reduceNumber(n, keepMaster = true) {
    let num = Math.abs(Number(n) || 0);
    // If zero, return 0
    if (num === 0) return 0;
    while (num > 9) {
        if (keepMaster && (num === 11 || num === 22)) break;
        let s = 0;
        String(num).split("").forEach(d => s += Number(d));
        num = s;
    }
    return num;
}

// get digit-sum of date parts (YYYY-MM-DD input)
export function calcBhagyankFromISO(dateISO, keepMaster = true) {
    if (!dateISO) return null;
    // dateISO expected like "2000-12-26"
    const digits = dateISO.replace(/[^0-9]/g, "").split("").map(Number);
    const total = digits.reduce((a, b) => a + b, 0);
    return reduceNumber(total, keepMaster);
}

// moolank = day of month reduced
// moolank = day of month reduced with special handling for 11 → 2 and 22 → 4
export function calcMoolankFromISO(dateISO, keepMaster = true) {
    if (!dateISO) return null;
    const parts = dateISO.split("-");
    const day = Number(parts[2] || parts[0] || 0); // yyyy-mm-dd => day is parts[2]

    if (day === 11) return 2;
    if (day === 22) return 4;

    return reduceNumber(day, keepMaster);
}


// calc name number for a full name string
export function calcNameNumber(fullName, keepMaster = true) {
    if (!fullName) return { total: 0, reduced: 0, breakdown: {} };
    const words = fullName.trim().split(/\s+/);
    const breakdown = {};
    let total = 0;
    words.forEach((w, idx) => {
        const key = ["first", "middle", "last"][idx] || `part${idx + 1}`;
        let sum = 0;
        w.toUpperCase().split("").forEach(ch => {
            if (CHALDEAN_MAP[ch]) sum += CHALDEAN_MAP[ch];
        });
        breakdown[key] = { raw: sum, reduced: reduceNumber(sum, keepMaster), text: w };
        total += sum;
    });
    return { total, reduced: reduceNumber(total, keepMaster), breakdown };
}
// Compatibility check between two numbers
export function checkCompatibility(num1, num2) {
    if (!num1 || !num2) return "Unknown";

    // Friendly pairs (उदाहरण)
    const friendlyPairs = [
        [1, 3], [1, 5], [1, 2], [1, 6], [1, 9], [2, 3],
        [2, 5], [2, 6], [3, 5], [3, 7], [5, 6], [7, 6], 
    ];

    if (friendlyPairs.some(([a, b]) => (a === num1 && b === num2) || (a === num2 && b === num1))) {
        return "मित्रता (Friendly)";
    }

    // Enemy pairs (उदाहरण)
    const enemyPairs = [
        [1, 8], [2, 4], [2, 8], [2, 9], [3, 6], [4, 8], [4, 9],
    ];

    if (enemyPairs.some(([a, b]) => (a === num1 && b === num2) || (a === num2 && b === num1))) {
        return "शत्रुता (Enemy)";
    }

    // Default neutral
    return "तटस्थ (Neutral)";
}
