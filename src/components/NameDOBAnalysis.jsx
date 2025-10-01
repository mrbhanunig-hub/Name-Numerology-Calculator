import { checkCompatibility } from "../utils/numerology";

function getCompatibilityStyle(result) {
  switch (result) {
    case "मित्रता (Friendly)":
      return "text-green-600 font-bold";
    case "शत्रुता (Enemy)":
      return "text-red-600 font-bold";
    case "तटस्थ (Neutral)":
      return "text-gray-600 font-bold";
    default:
      return "text-black";
  }
}

export default function NameDOBAnalysis({ namank, moolank, bhagyank }) {
  const nameMool = checkCompatibility(namank, moolank);
  const nameBhagya = checkCompatibility(namank, bhagyank);

  return (
    <div className="mt-6 p-4 bg-yellow-100 rounded-lg shadow">
      <h2 className="font-bold text-lg mb-3">📊 Name and Date of Birth Analysis</h2>
      
      <p>
        नामांक ({namank}) और मूलांक ({moolank}) के बीच संबंध: 
        <span className={`ml-2 ${getCompatibilityStyle(nameMool)}`}>
          {nameMool}
        </span>
      </p>
      
      <p className="mt-2">
        नामांक ({namank}) और भाग्यांक ({bhagyank}) के बीच संबंध: 
        <span className={`ml-2 ${getCompatibilityStyle(nameBhagya)}`}>
          {nameBhagya}
        </span>
      </p>
    </div>
  );
}
