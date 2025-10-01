// src/components/CorrectionAdvice.jsx
export default function CorrectionAdvice({ data }) {
    // simple advice default
    const namank = data?.namank;
    let adviceHindi = "किसी भी नाम में सुधार करने के लिये उसके न्युमेरोग्रिड को देख कर ही निर्णय लेना चाहिये क्युकि किसी भी नम्बर की आवृत्ति अधिक हो जाने पर उसके नकारात्मक प्रभाव मिलने लगते हैं। नाम में सुधार करके बेहतर परिणाम प्राप्त किए जा सकते हैं इसके लिए आप अच्छे न्युमेरोलाजिस्ट से संपर्क करें।";
    let adviceEng = "To improve any name, one should take a decision only after looking at its numerological grid because if the frequency of any number increases, its negative effects start appearing. You can achieve better results by correcting your name For this you should contact a good numerologist.";

    if (namank === 4) {
        adviceHindi = "नामांक 4 अर्थात राहू चुनौतियों और उतार-चढ़ाव से भरपूर है। किसी भी नाम में सुधार करने के लिये उसके न्युमेरोग्रिड को देख कर ही निर्णय लेना चाहिये क्युकि किसी भी नम्बर की आवृत्ति अधिक हो जाने पर उसके नकारात्मक प्रभाव मिलने लगते हैं। नाम में सुधार करके बेहतर परिणाम प्राप्त किए जा सकते हैं इसके लिए आप अच्छे न्युमेरोलाजिस्ट से संपर्क करें।";
        adviceEng = "Name number 4 means Rahu brings challenges and UP- Downs. To improve any name, one should take a decision only after looking at its numerological grid because if the frequency of any number increases, its negative effects start appearing. You can achieve better results by correcting your name For this you should contact a good numerologist..";
    }
    if (namank === 2) {
        adviceHindi = "नामांक 2 अर्थात चंद्रमा अच्छा इन्सान, कलाकार, भावुक किन्तु ग्रिड में कई बार आने पर अत्यधिक भावुक, अत्यधिक सोचने वाला, अवसाद ग्रस्त होता है। किसी भी नाम में सुधार करने के लिये उसके न्युमेरोग्रिड को देख कर ही निर्णय लेना चाहिये क्युकि किसी भी नम्बर की आवृत्ति अधिक हो जाने पर उसके नकारात्मक प्रभाव मिलने लगते हैं। नाम में सुधार करके बेहतर परिणाम प्राप्त किए जा सकते हैं इसके लिए आप अच्छे न्युमेरोलाजिस्ट से संपर्क करें।";
        adviceEng = "Name number 2 means Moon Good person, artist, emotional but on coming to grid many times, is very emotional, overthinks, suffers from depression. To improve any name, one should take a decision only after looking at its numerological grid because if the frequency of any number increases, its negative effects start appearing. You can achieve better results by correcting your name For this you should contact a good numerologist.";
    }
    if (namank === 1) {
        adviceHindi = "नामांक 1 अर्थात सूर्य नाम, सम्मान, और आत्मविश्वास देता है किन्तु ग्रिड में कई बार आने पर इससे उल्टे परिणाम देता है किन्तु किसी भी नाम में सुधार करने के लिये उसके न्युमेरोग्रिड को देख कर ही निर्णय लेना चाहिये क्युकि किसी भी नम्बर की आवृत्ति अधिक हो जाने पर उसके नकारात्मक प्रभाव मिलने लगते हैं। नाम में सुधार करके बेहतर परिणाम प्राप्त किए जा सकते हैं इसके लिए आप अच्छे न्युमेरोलाजिस्ट से संपर्क करें।";
        adviceEng = "Name number 1 means Sun Gives name, respect, and self-confidence But if the grid is visited multiple times, it gives the opposite result. but To improve any name, one should take a decision only after looking at its numerological grid because if the frequency of any number increases, its negative effects start appearing. You can achieve better results by correcting your name For this you should contact a good numerologist.";
    }
    if (namank === 3) {
        adviceHindi = "नामांक 3 अर्थात ब्रहस्पति ज्ञानी, सफल, बातचीत से हल निकालने वाले किन्तु ग्रिड में अधिक होने पर घमंडी बना देता है मूलांक/भाग्यांक 6 वालों को इससे बचना चाहिए। किसी भी नाम में सुधार करने के लिये उसके न्युमेरोग्रिड को देख कर ही निर्णय लेना चाहिये क्युकि किसी भी नम्बर की आवृत्ति अधिक हो जाने पर उसके नकारात्मक प्रभाव मिलने लगते हैं। नाम में सुधार करके बेहतर परिणाम प्राप्त किए जा सकते हैं इसके लिए आप अच्छे न्युमेरोलाजिस्ट से संपर्क करें।";
        adviceEng = "Name number 3 means Jupiter Knowledgeable, successful, able to find solutions through conversation, but if it is high in the grid, it makes one arrogant. Those with Root Number/Destiny Number 6 should avoid it. To improve any name, one should take a decision only after looking at its numerological grid because if the frequency of any number increases, its negative effects start appearing. You can achieve better results by correcting your name For this you should contact a good numerologist.";
    }
    if (namank === 5) {
        adviceHindi = "नामांक 5 अर्थात बुद्ध सबका मित्र, बुद्धिमान, रोमांटिक है किन्तु ग्रिड में कई बार आने पर इससे उल्टे परिणाम देता है। किसी भी नाम में सुधार करने के लिये उसके न्युमेरोग्रिड को देख कर ही निर्णय लेना चाहिये क्युकि किसी भी नम्बर की आवृत्ति अधिक हो जाने पर उसके नकारात्मक प्रभाव मिलने लगते हैं। नाम में सुधार करके बेहतर परिणाम प्राप्त किए जा सकते हैं इसके लिए आप अच्छे न्युमेरोलाजिस्ट से संपर्क करें।";
        adviceEng = "Name number 5 means Mercury Everyone's friend, Intelligent, Romantic But if the grid is visited multiple times, it gives the opposite result. To improve any name, one should take a decision only after looking at its numerological grid because if the frequency of any number increases, its negative effects start appearing. You can achieve better results by correcting your name For this you should contact a good numerologist.";
    }
    if (namank === 6) {
        adviceHindi = "नामांक 6 अर्थात शुक्र विलासिता और आराम पसन्द, पारिवारिक, धनी,  मूलांक/भग्यांक 3 वालों को इससे बचना चाहिए। किसी भी नाम में सुधार करने के लिये उसके न्युमेरोग्रिड को देख कर ही निर्णय लेना चाहिये क्युकि किसी भी नम्बर की आवृत्ति अधिक हो जाने पर उसके नकारात्मक प्रभाव मिलने लगते हैं। नाम में सुधार करके बेहतर परिणाम प्राप्त किए जा सकते हैं इसके लिए आप अच्छे न्युमेरोलाजिस्ट से संपर्क करें।";
        adviceEng = "Name number 6 means Venus likes luxury and comfort, are family-oriented and wealthy, People with radix/bhagyank 3 should avoid this. To improve any name, one should take a decision only after looking at its numerological grid because if the frequency of any number increases, its negative effects start appearing. You can achieve better results by correcting your name For this you should contact a good numerologist.";
    }
    if (namank === 9) {
        adviceHindi = "नामांक 9 अर्थात मंगल  ऊर्जावान , साहसी, बुद्धिमान किन्तु गुस्सेवाला होने के कारण इस पर नाम नही रखते हैं ग्रिड में ज्यादा होने पर आलसी बनाता है। किसी भी नाम में सुधार करने के लिये उसके न्युमेरोग्रिड को देख कर ही निर्णय लेना चाहिये क्युकि किसी भी नम्बर की आवृत्ति अधिक हो जाने पर उसके नकारात्मक प्रभाव मिलने लगते हैं। नाम में सुधार करके बेहतर परिणाम प्राप्त किए जा सकते हैं इसके लिए आप अच्छे न्युमेरोलाजिस्ट से संपर्क करें।";
        adviceEng = "Name number 9 means Mars Energetic, courageous, intelligent but short tempered, hence this name should not be kept. If present in excess in the grid, it makes one lazy. To improve any name, one should take a decision only after looking at its numerological grid because if the frequency of any number increases, its negative effects start appearing. You can achieve better results by correcting your name For this you should contact a good numerologist.";
    }
    if (namank === 7) {
        adviceHindi = "नामांक 7 अर्थात केतु भावुकता पूर्ण और अत्यधिक जिज्ञासु होने के कारण परेशान। किसी भी नाम में सुधार करने के लिये उसके न्युमेरोग्रिड को देख कर ही निर्णय लेना चाहिये क्युकि किसी भी नम्बर की आवृत्ति अधिक हो जाने पर उसके नकारात्मक प्रभाव मिलने लगते हैं। नाम में सुधार करके बेहतर परिणाम प्राप्त किए जा सकते हैं इसके लिए आप अच्छे न्युमेरोलाजिस्ट से संपर्क करें।";
        adviceEng = "Name number 7 Means Ketu Emotional & Troubled by being overly curious.To improve any name, one should take a decision only after looking at its numerological grid because if the frequency of any number increases, its negative effects start appearing. You can achieve better results by correcting your name For this you should contact a good numerologist.";
    }
    if (namank === 8) {
        adviceHindi = "नामांक 8 अर्थात शनि इसपर नाम नही रखना चाहिए ये समस्या, देरी, रुकावट के अलावा अधिक बार आने पर वैवाहिक जीवन में समस्या देता है। किसी भी नाम में सुधार करने के लिये उसके न्युमेरोग्रिड को देख कर ही निर्णय लेना चाहिये क्युकि किसी भी नम्बर की आवृत्ति अधिक हो जाने पर उसके नकारात्मक प्रभाव मिलने लगते हैं। नाम में सुधार करके बेहतर परिणाम प्राप्त किए जा सकते हैं इसके लिए आप अच्छे न्युमेरोलाजिस्ट से संपर्क करें।";
        adviceEng = "Name number 8 Means Saturn One should not keep a name on this, apart from problems, delays, obstructions, if it occurs more frequently then it causes problems in married life.. To improve any name, one should take a decision only after looking at its numerological grid because if the frequency of any number increases, its negative effects start appearing. You can achieve better results by correcting your name For this you should contact a good numerologist.";
    }

    return (
        <div className="bg-orange-50 border border-orange-300 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Name Correction Advice</h3>
            <p className="text-sm text-gray-800"><strong>Hindi:</strong> {adviceHindi}</p>
            <p className="text-sm text-gray-800 mt-2"><strong>English:</strong> {adviceEng}</p>
        </div>
    );
}
