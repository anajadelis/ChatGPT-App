const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Rota para receber as mensagens do aplicativo
app.post('/api/message', async (req, res) => {
  const { message } = req.body;
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: message,
    max_tokens: 50,
    temperature: 0.7,
    n: 1,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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', // Substitua YOUR_API_KEY pela sua chave de API do OpenAI
    },
  });

  const reply = response.data.choices[0].text.trim();
  res.json({ reply });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
