import React, { useState } from 'react';
import axios from 'axios';

const TextToSpeechComponent = () => {
  const [text, setText] = useState('');

  const synthesizeSpeech = async () => {
    try {
      const response = await axios.post('http://localhost:3000/synthesize', { text });
      const blob = new Blob([response.data], { type: 'audio/mp3' });
      const url = window.URL.createObjectURL(blob);
      new Audio(url).play();
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={synthesizeSpeech}>Speak</button>
    </div>
  );
};

export default TextToSpeechComponent;
