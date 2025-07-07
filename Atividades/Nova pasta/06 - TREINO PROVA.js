function obterProdutos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.floor(Math.random() * 100);
      
      if (numero % 2 === 0) {
        const produtos = [
          { id: 1, nome: "Notebook", tipo: "Eletrônico", preco: 3200 },
          { id: 2, nome: "Mouse", tipo: "Acessório", preco: 80 },
          { id: 3, nome: "Teclado", tipo: "Acessório", preco: 150 },
          { id: 4, nome: "Monitor", tipo: "Eletrônico", preco: 1000 },
          { id: 5, nome: "Cadeira", tipo: "Mobiliário", preco: 900 },
          { id: 6, nome: "Webcam", tipo: "Eletrônico", preco: 350 },
          { id: 7, nome: "Impressora", tipo: "Eletrônico", preco: 600 },
          { id: 8, nome: "Fone", tipo: "Acessório", preco: 250 },
          { id: 9, nome: "HD Externo", tipo: "Armazenamento", preco: 500 },
          { id: 10, nome: "Pen Drive", tipo: "Armazenamento", preco: 90 },
        ];
        resolve(produtos);
      } else {
        reject({ res: "ERROR", msg: "ERRO NO SISTEMA" });
      }
    }, 4000);
  });
}

async function carregar() {
  try {
    const produtos = await obterProdutos();

    let total = 0;
    let maisCaro = produtos[0];
    let maisBarato = produtos[0];

    produtos.forEach(p => {
      total += p.preco;
      if (p.preco > maisCaro.preco) maisCaro = p;
      if (p.preco < maisBarato.preco) maisBarato = p;
    });

    const media = total / produtos.length;

    const tabela = document.getElementById("tabela-produtos");
    produtos.forEach(p => {
      const linha = document.createElement("tr");

      // Adiciona destaque se for acima da média
      if (p.preco > media) linha.classList.add("acima-media");
      if (p.id === maisCaro.id) linha.classList.add("mais-caro");
      if (p.id === maisBarato.id) linha.classList.add("mais-barato");

      linha.innerHTML = `
        <td>${p.id}</td>
        <td>${p.nome}</td>
        <td>${p.tipo}</td>
        <td>R$ ${p.preco.toFixed(2)}</td>
      `;
      tabela.appendChild(linha);
    });
  } catch (erro) {
    console.log(erro.msg);
  }
}

