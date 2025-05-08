// Função para exibir uma pergunta aleatória
function mostrarPergunta(categoria) {
    let perguntaAleatoria;
  
    // Escolhe a pergunta aleatória da categoria
    if (categoria === 'popular') {
      perguntaAleatoria = perguntasPopular[Math.floor(Math.random() * perguntasPopular.length)];
    } else if (categoria === 'picante') {
      perguntaAleatoria = perguntasPicante[Math.floor(Math.random() * perguntasPicante.length)];
    } else if (categoria === 'relacionamento') {
      perguntaAleatoria = perguntasRelacionamento[Math.floor(Math.random() * perguntasRelacionamento.length)];
    } else if (categoria === 'extremo') {
      perguntaAleatoria = perguntasExtremo[Math.floor(Math.random() * perguntasExtremo.length)];
    }
  
    // Exibe a pergunta no elemento com o id 'pergunta'
    document.getElementById('pergunta').innerText = perguntaAleatoria;
  }
  
  // Adiciona os eventos de clique para cada botão
  document.getElementById('btnPopular').addEventListener('click', () => mostrarPergunta('popular'));
  document.getElementById('btnPicante').addEventListener('click', () => mostrarPergunta('picante'));
  document.getElementById('btnRelacionamento').addEventListener('click', () => mostrarPergunta('relacionamento'));
  document.getElementById('btnExtremo').addEventListener('click', () => mostrarPergunta('extremo'));