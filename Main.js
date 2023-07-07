const express = require('express');
const textToSpeech = require('@google-cloud/text-to-speech');
const client = new textToSpeech.TextToSpeechClient();

const app = express();
app.use(express.json());

app.post('/synthesize', async (req, res) => {
  const request = {
    input: {text: req.body.text},
    // Select the language and SSML voice gender (optional)
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    // select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  const [response] = await client.synthesizeSpeech(request);
  res.set('Content-Type', 'audio/mp3');
  res.send(response.audioContent);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
