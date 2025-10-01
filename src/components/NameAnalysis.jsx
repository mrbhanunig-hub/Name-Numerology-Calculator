// src/components/NameAnalysis.jsx
export default function NameAnalysis({ data }) {
    if (!data) return null;
    return (
        <div className="bg-white shadow rounded-lg p-5">
            <h2 className="text-lg font-semibold mb-3">Individual Name Analysis</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-violet-50 p-4 rounded">
                    <p className="text-sm">First Name: <span className="font-medium">{data.firstName.text}</span></p>
                    <p className="text-3xl font-bold text-violet-700 mt-2">{data.firstName.reduced}</p>
                    <p className="text-sm text-gray-600">Individual Value</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded">
                    <p className="text-sm">Last Name: <span className="font-medium">{data.lastName.text}</span></p>
                    <p className="text-3xl font-bold text-emerald-700 mt-2">{data.lastName.reduced}</p>
                    <p className="text-sm text-gray-600">Individual Value</p>
                </div>
            </div>
        </div>
    );
}
