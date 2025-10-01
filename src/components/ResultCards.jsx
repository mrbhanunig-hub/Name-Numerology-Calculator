// src/components/ResultCards.jsx
export default function ResultCards({ data }) {
    const cards = [
        { title: "Moolank (मूलांक)", value: data.moolank ?? '-', desc: "Birth Date Number", color: "bg-[#FFF1F1]", textColor: "text-[#3E1E68]" },
        { title: "Bhagyank (भाग्यांक)", value: data.bhagyank ?? '-', desc: "Destiny Number", color: "bg-[#F8FAB4]", textColor: "text-[#B45253]" },
        { title: "Namank (नामांक)", value: data.namank ?? '-', desc: "Name Number", color: "bg-[#EBEBEB]", textColor: "text-[#647FBC]" },
    ];


    return (
        <div className="grid gap-4 md:grid-cols-3">
            {cards.map((c, i) => (
                <div key={i} className={`${c.color} ${c.textColor} rounded-lg p-5 shadow`}>
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-lg">{c.title}</h3>
                    </div>
                    <div className="mt-4">
                        <p className="text-4xl font-bold">{c.value}</p>
                        <p className="mt-2">{c.desc}</p>
                        <div className="mt-3">
                            <span className="inline-block bg-white text-gray-800 px-2 py-1 rounded text-sm">Status</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
