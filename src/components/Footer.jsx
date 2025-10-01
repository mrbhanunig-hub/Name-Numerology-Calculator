// src/components/Footer.jsx
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="max-w-5xl mx-auto p-6">
            <div className="rounded-lg p-6 flex flex-col md:flex-row items-center justify-center gap-10 ">

                <div className="text-center md:text-left space-y-2">
                    <p className="font-semibold text-2xl">अधिक जानकारी के लिए संपर्क करें</p>
                    <p className="font-bold text-2xl text-orange-700">Astrologer Vivek Nigam</p>
                    <p className="text-xl font-medium ">
                        (Astrologer, Numerologist, Vastu)
                    </p>
                    <p className="text-sm text-black">Mob: +91 9450122288, +91 8299037227</p>
                    

                    <div className="flex justify-center md:justify-start space-x-4 mt-3">
                        <a href="https://www.facebook.com/share/1Khvp3yzUX/" target="_blank" rel="noreferrer">
                            <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition" />
                        </a>
                        <a href="https://wa.me/+918299037227" target="_blank" rel="noreferrer">
                            <FaWhatsapp className="text-green-500 text-2xl hover:scale-110 transition" />
                        </a>
                        <a href="https://www.instagram.com/thecosmiccounselaor?igsh=OXhlbThtcXB0OTN0" target="_blank" rel="noreferrer">
                            <FaInstagram className="text-red-800 text-2xl hover:scale-110 transition" />
                        </a>
                    </div>
                </div>

                {/* Right Circle (Photo) */}
                <div className="flex flex-col items-center mt-4 md:mt-0">
                    <div className="w-30 h-30 rounded-full flex items-center justify-center overflow-hidden">
                    <img className="h-full w-full" src="./public/profile.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
