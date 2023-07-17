const express = require("express");
const app = express();

const PORT = 4000;

app.listen(PORT, function () {
  console.log(`O express está rodando na porta ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Funcionando");
});
