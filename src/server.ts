import express from "express";

const app = express();
const port = 3000;

const Pessoa = {
  nome: "Marcos",
  Sobrenome: "Raimundo",
  idade: 18
}
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the teste!');
});
app.get("/pessoa", (req, res) => {
  res.send(Pessoa)
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});