import React, { useState } from 'react';
import "../App.css";

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const rephraseText = () => {
    // Make an API request to rephrase the input text using OpenAI's GPT-3 API
    fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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' // Replace with your actual API key
      },
      body: JSON.stringify({
        prompt: inputText,
        max_tokens: 50, // Adjust the max_tokens as needed
        engine: 'text-davinci-002' // Use the text-davinci engine
      })
    })
    .then(response => response.json())
    .then(data => {
      // Extract the rephrased text from the API response
      setOutputText(data.choices[0].text);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
 
  return (
    <div className="App">
      <h1>Rephraser</h1>
      <textarea
        placeholder="Enter text to rephrase"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={rephraseText}>Rephrase</button>
      <h2>Rephrased Text</h2>
      <div className="output-text">{outputText}</div>
    </div>
  );
}

export default App;