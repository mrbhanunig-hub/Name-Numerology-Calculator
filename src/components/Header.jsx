// src/components/Header.jsx
export default function Header() {
    return (
        <header className="text-center py-6">
            <div className="">
                <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
                    <span><img className="h-15 w-18" src="/public/logon.png" alt="" srcset="" /></span> The Cosmic Counselor
                </h1>
                <p className="text-lg font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name Numerology Calculator/Analyser</p>
            </div>
        </header>
    );
}
