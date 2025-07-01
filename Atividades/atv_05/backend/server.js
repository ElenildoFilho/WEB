const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/estados', async (req, res) => {
  try {
    const { data } = await axios.get('https://covid19-brazil-api.vercel.app/api/report/v1');
    res.json(data);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar estados' });
  }
});

app.get('/api/paises', async (req, res) => {
  try {
    const { data } = await axios.get('https://covid19-brazil-api.vercel.app/api/report/v1/countries');
    res.json(data);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar países' });
  }
});

app.listen(PORT, () => {
  console.log(`Rodando em http://localhost:${PORT}`);
});
