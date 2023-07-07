import React, { useEffect, useRef } from 'react';


// פונקציה של דיבור
export const speakText = (text, callback) => {
    const speech = new window.SpeechSynthesisUtterance();
    speech.text = text;

    // Call the callback function when the speech ends
    speech.onend = callback;

    window.speechSynthesis.speak(speech);
}


// קומפוננטה של דיבור
const SpeechComponent = ({ text }) => {
    const speech = useRef(new window.SpeechSynthesisUtterance());

    useEffect(() => {
        speech.current.text = text;
        window.speechSynthesis.speak(speech.current);
    }, [text]);

    return null;
}

export default SpeechComponent;
