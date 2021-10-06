function handleInput() {
  const paragrafo = document.getElementById('paragrafo');
  paragrafo.innerHTML = '';
  const texto = document.getElementById('input').value;
  
  const separarPorQuebraLinha = texto.split('\n'); // retorna um array
  
  console.log(separarPorQuebraLinha);

  let filtrado;
  filtrado = separarPorQuebraLinha.filter((linha) => !linha.includes('7'));
  filtrado = filtrado.filter((linha) => !linha.includes('5'));
  filtrado = filtrado.filter((linha) => !linha.includes('6'));
  filtrado = filtrado.filter((linha) => !linha.includes('9'));
  filtrado = filtrado.filter((linha) => !linha.includes('/'));
  filtrado = filtrado.filter((linha) => !linha.includes('#'));
  filtrado = filtrado.filter((linha) => !linha.includes('G '));
  filtrado = filtrado.filter((linha) => !linha.includes('Gm '));
  // filtrado = filtrado.filter((linha) => !linha.includes('A '));
  filtrado = filtrado.filter((linha) => !linha.includes('Am'));
  filtrado = filtrado.filter((linha) => !linha.includes('B '));
  filtrado = filtrado.filter((linha) => !linha.includes('Bm'));
  filtrado = filtrado.filter((linha) => !linha.includes('C '));
  filtrado = filtrado.filter((linha) => !linha.includes('Cm '));
  filtrado = filtrado.filter((linha) => !linha.includes('A(sus2)'));
  // filtrado = filtrado.filter((linha) => !linha.includes('D'));
  // filtrado = filtrado.filter((linha) => !linha.includes('Dm '));
  filtrado = filtrado.filter((linha) => !linha.includes('E ') || !linha.includes('A '));
  filtrado = filtrado.filter((linha) => !linha.includes('D ') || !linha.includes('A '));
  filtrado = filtrado.filter((linha) => !linha.includes('Em') || !linha.includes('G'));
  // filtrado = filtrado.filter((linha) => !linha.includes('E'));
  filtrado = filtrado.filter((linha) => !linha.includes(' Em ') || !linha.includes('D'));
  filtrado = filtrado.filter((linha) => !linha.includes('F '));
  filtrado = filtrado.filter((linha) => !linha.includes('C°'));
  filtrado = filtrado.filter((linha) => !linha.includes('D°'));
  filtrado = filtrado.filter((linha) => !linha.includes('E°'));
  filtrado = filtrado.filter((linha) => !linha.includes('F°'));
  filtrado = filtrado.filter((linha) => !linha.includes('G°'));
  filtrado = filtrado.filter((linha) => !linha.includes('A°'));
  filtrado = filtrado.filter((linha) => !linha.includes('B°'));
  filtrado = filtrado.map((linha) => linha + `</br>`);


  const removeVirgula = filtrado.join(' ');


  const converteEmString = removeVirgula.toString();

  const buscaIdParagrafo = document.getElementById('paragrafo');

  buscaIdParagrafo.innerHTML = converteEmString;
};


function copiarTexto() {
  const textoParaCopiar = document.getElementById('paragrafo').innerText;

  navigator.clipboard.writeText(textoParaCopiar).then();
};

document.getElementById('copyButton').addEventListener('click', () => {
  const button = document.getElementById('copyButton');
  button.innerHTML = 'COPIADO';
  button.style.backgroundColor = '#7FFF00';
});
