//animação, romance, ficção científica, fantasia, aventura
// Divertidamente, LIVRE, animação, aventura
// Interestelar, 10 anos, ficção científica, aventura
// Harry Potter, LIVRE, infantil, fantasia
// Como eu era antes de você, 12 anos, romance, drama
// Animais Fantáticos, 12 anos, fantasia, aventura


let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Como eu era antes de você";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Animais Fantásticos";          
        } else{
         return "Interestelar";
        }
      } else {
        if (gostaDeFantasia) {
          return "Divertidamente";
        } else {
          return "Harry Potter";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Garfield";
    } else {
      return "Os Vingadores";
    }
  }
}
