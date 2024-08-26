const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
  const allowedUser = "Pedro Fausto";
  
  if (req.headers['user-name'] && req.headers['user-name'] === allowedUser) {
    next();
  } else {
    res.status(403).send('Acesso negado.');
  }
});

app.get('/', (req, res) => {
  res.send('Realizei de forma completa atividade solicitada...');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
