// Implement own reduce method

Array.prototype.myReduce = function (fn, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
      continue;
    }
    acc = fn(acc, this[i], i, this);
  }

  return acc;
};

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
  { nome: "Impressora", qtde: 1, preco: 649.5, fragil: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: true },
];

const media = carrinho
  .filter((el) => el.fragil === true)
  .map((el) => el.qtde * el.preco)
  .myReduce((acc, cur, index, arr) => {
    if (index < arr.length - 1) return acc + cur;
    acc += cur;
    return acc / (index + 1);
  });
console.log(media);
