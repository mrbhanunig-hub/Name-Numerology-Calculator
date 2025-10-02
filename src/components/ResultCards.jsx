// src/components/ResultCards.jsx
export default function ResultCards({ data }) {
    const cards = [
        { title: "Moolank (मूलांक)", value: data.moolank ?? '-', desc: "Personality Number", color: "bg-[#FFF1F1]", textColor: "text-[#3E1E68]" },
        { title: "Bhagyank (भाग्यांक)", value: data.bhagyank ?? '-', desc: "Destiny Number", color: "bg-[#F8FAB4]", textColor: "text-[#B45253]" },
        { title: "Namank (नामांक)", value: data.namank ?? '-', desc: "Name Number", color: "bg-[#EBEBEB]", textColor: "text-[#647FBC]" },
    ];


    return (
        <div className="grid gap-4 md:grid-cols-3">
            {cards.map((c, i) => (
                <div key={i} className={`${c.color} ${c.textColor} rounded-lg p-5 shadow`}>
                    <div className="flex flex-col justify-between items-center">
                        <p className="text-xl font-semibold">{c.desc}</p>
                        <h3 className="font-semibold text-lg">{c.title}</h3>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <p className="text-4xl font-bold">{c.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
