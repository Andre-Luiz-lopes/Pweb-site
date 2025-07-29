const express = require('express');
const path = require('path');
const { quizQuestions, personagens } = require('./quizData');
const db = require('./db');
const indexRouter = require('./routes/index');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

// Página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Quiz Normal
app.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'quiz.html'));
});

// Adivinhe o Personagem
app.get('/personagem', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'personagem.html'));
});

// Modo Hardcore
app.get('/hardcore', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'hardcore.html'));
});

// Ranking
app.get('/rank', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rank.html'));
});

// API para perguntas
app.get('/api/perguntas', (req, res) => {
  res.json(quizQuestions);
});

// API para personagens
app.get('/api/personagens', (req, res) => {
  res.json(personagens);
});

app.get('/api/ranking', (req, res) => {
  db.all('SELECT nome, pontos FROM scores ORDER BY pontos DESC, data ASC LIMIT 10', [], (err, rows) => {
    if (err) return res.status(500).json([]);
    res.json(rows);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});