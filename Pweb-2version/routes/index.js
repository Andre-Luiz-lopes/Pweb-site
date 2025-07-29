const express = require('express');
const path = require('path');
const { quizQuestions, personagens } = require('../quizData');
const db = require('../db');
const router = express.Router();

// Página inicial
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Rotas dos modos
router.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/quiz.html'));
});
router.get('/hardcore', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/hardcore.html'));
});
router.get('/personagem', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/personagem.html'));
});

// API para perguntas (embaralhadas)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
router.get('/api/perguntas', (req, res) => {
  res.json(shuffle([...quizQuestions]));
});
router.get('/api/personagens', (req, res) => {
  res.json(personagens);
});

// Salvar pontuação
router.post('/api/salvar-pontuacao', express.json(), (req, res) => {
  const { nome, pontos } = req.body;
  if (!nome || typeof pontos !== 'number') {
    return res.status(400).json({ error: 'Dados inválidos' });
  }
  db.run('INSERT INTO scores (nome, pontos) VALUES (?, ?)', [nome, pontos], err => {
    if (err) return res.status(500).json({ error: 'Erro ao salvar' });
    res.json({ success: true });
  });
});

// Buscar ranking
router.get('/api/ranking', (req, res) => {
  db.all('SELECT nome, pontos FROM scores ORDER BY pontos DESC, data ASC LIMIT 10', [], (err, rows) => {
    if (err) return res.status(500).json([]);
    res.json(rows);
  });
});

module.exports = router;
