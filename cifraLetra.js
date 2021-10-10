function handleInput() {
  const paragrafo = document.getElementById('paragrafo');
  paragrafo.innerHTML = '';
  const texto = document.getElementById('input').value;
  
  const separarPorQuebraLinha = texto.split('\n'); // retorna um array

  const linhaComEspaco = separarPorQuebraLinha.map((linha) => linha + ' ');
  
  console.log(linhaComEspaco);

  let filtrado;
  filtrado = linhaComEspaco.filter((linha) => !linha.includes('7'));
  filtrado = filtrado.filter((linha) => !linha.includes('5'));
  filtrado = filtrado.filter((linha) => !linha.includes('6'));
  filtrado = filtrado.filter((linha) => !linha.includes('9'));
  filtrado = filtrado.filter((linha) => !linha.includes('/'));
  filtrado = filtrado.filter((linha) => !linha.includes('#'));
  filtrado = filtrado.filter((linha) => !linha.includes('E '));
  filtrado = filtrado.filter((linha) => !linha.includes('G '));
  filtrado = filtrado.filter((linha) => !linha.includes('Gm '));
  filtrado = filtrado.filter((linha) => !linha.includes(' A '));
  filtrado = filtrado.filter((linha) => !linha.includes('Am '));
  filtrado = filtrado.filter((linha) => !linha.includes('B '));
  filtrado = filtrado.filter((linha) => !linha.includes('Bm'));
  filtrado = filtrado.filter((linha) => !linha.includes('C '));
  filtrado = filtrado.filter((linha) => !linha.includes('Cm'));
  filtrado = filtrado.filter((linha) => !linha.includes('A(sus2)'));
  filtrado = filtrado.filter((linha) => !linha.includes('D '));
  filtrado = filtrado.filter((linha) => !linha.includes('Dm'));
  filtrado = filtrado.filter((linha) => !linha.includes('A ') || !linha.includes('E '));
  filtrado = filtrado.filter((linha) => !linha.includes('E ') || !linha.includes('A '));
  filtrado = filtrado.filter((linha) => !linha.includes('D ') || !linha.includes('A '));
  filtrado = filtrado.filter((linha) => !linha.includes('Em ') || !linha.includes('G '));
  // filtrado = filtrado.filter((linha) => !linha.includes('E'));
  filtrado = filtrado.filter((linha) => !linha.includes(' Em ') || !linha.includes('D '));
  filtrado = filtrado.filter((linha) => !linha.includes('F '));
  filtrado = filtrado.filter((linha) => !linha.includes('C°'));
  filtrado = filtrado.filter((linha) => !linha.includes('D°'));
  filtrado = filtrado.filter((linha) => !linha.includes('E°'));
  filtrado = filtrado.filter((linha) => !linha.includes('F°'));
  filtrado = filtrado.filter((linha) => !linha.includes('G°'));
  filtrado = filtrado.filter((linha) => !linha.includes('A°'));
  filtrado = filtrado.filter((linha) => !linha.includes('B°'));
  filtrado = filtrado.filter((linha) => !linha.includes('Cb'));
  filtrado = filtrado.filter((linha) => !linha.includes('Db'));
  filtrado = filtrado.filter((linha) => !linha.includes('Eb'));
  filtrado = filtrado.filter((linha) => !linha.includes('Fb'));
  filtrado = filtrado.filter((linha) => !linha.includes('Gb'));
  filtrado = filtrado.filter((linha) => !linha.includes('Ab'));
  filtrado = filtrado.filter((linha) => !linha.includes('Bb'));
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
