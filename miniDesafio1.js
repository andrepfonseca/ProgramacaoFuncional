const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];
// Print all names
const names = carrinho.map((el) => el.nome);
console.log(names);

// Print all total values
const value = carrinho.map((el) => el.qtde * el.preco);
console.log(value);
