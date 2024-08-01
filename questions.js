// Serie Tv
let questions = [
  {
    numb: 1,
    question: `Dans la serie "<cite>The Big Bang Theory</cite>", Comment s'appelle le meilleur ami de Sheldon ?`,
    answer: "Leonard",
    options: ["Leonard", "Gaspard", "Leopard", "Bernard"],
  },
  {
    numb: 2,
    question: `Encore dans la serie "<cite>The Big Bang Theory</cite>", Comment s'appelle la voisine de Sheldon et de leonard ?`,
    answer: "Penny",
    options: ["Emmy", "Mireille", "Emma", "Penny"],
  },
  {
    numb: 3,
    question: `Toujours dans la serie <cite>The Big Bang Theory</cite>, Quelle est la race du chien de Rajesh ?`,
    answer: "un Yorkshire",
    options: [
      "un Yorkshire",
      "un Chihuahua",
      "un Carlin",
      "un Cavalier King Charles",
    ],
  },
  {
    numb: 4,
    question: `Dans la serie "<cite>Malcolm</cite>", Qui est le grand frère de Reese ?`,
    answer: "Francis",
    options: ["Malcolm", "Dewey", "Francis", "Hal"],
  },
  {
    numb: 5,
    question: `Toujours dans la serie "<cite>Malcolm</cite>", Quel personnage à un don musical ?`,
    answer: "Dewey",
    options: ["Lois", "Jamie", "Stevie", "Dewey"],
  },
];

// Histoire
let histoires = [
  {
    numb: 1,
    question: `Quel est le premier pays envahit par l'Allemagne en 1939 ?`,
    answer: "la Pologne",
    options: ["la France", "l'Italie", "la Pologne", "l'Angleterre"],
  },
  {
    numb: 2,
    question: `En quelle année, Charles de Gaulle a-t-il lancé son appel du 18 juin ?`,
    answer: "1940",
    options: ["1939", "1940", "1941", "1942"],
  },
  {
    numb: 3,
    question: `Quel animal ou objet, à pu prendre des photos pour espionner l'ennemi durants la seconde guerre mondiale ?`,
    answer: "un Pigeon",
    options: [
      "un Pigeon",
      "un Corbeau",
      "un Drone",
      "un Smartphone",
    ],
  },
  {
    numb: 4,
    question: `Quel est le nom de l'Opération durant le débarquement de Normandie le 6 juin 1944 ?`,
    answer: "Opération Overlord",
    options: ["Opération coup de poing", "Opération Cobra", "Opération Overlord", "Opération Barbarossa"],
  },
  {
    numb: 5,
    question: `Qui a conçu les uniformes des soldats Allemands lors de la Seconde Guerre Mondiale ?`,
    answer: "Hugo Boss",
    options: ["Jean-Paul Gaultier", "Louis Vuitton", "Hugo Boss", "Le ministère Allemand"],
  },
];

let themeQuestion = document.querySelectorAll(".theme");
for (let tout = 0; tout < themeQuestion.length; tout++) {
  themeQuestion[tout].innerText = " Cheval";  
}
let mesQuestions = [histoires,questions] ; // pensez à mettre les themes (nom de variable) ici
let quesRand = RandArray(mesQuestions);
console.log(quesRand);

if(quesRand === histoires){
  for (let tout = 0; tout < themeQuestion.length; tout++) {
    themeQuestion[tout].innerText = " Histoire ";  //rajouter pour chaque nouveau theme
  }
} else{
  for (let tout = 0; tout < themeQuestion.length; tout++) {
    themeQuestion[tout].innerText = " Serie Tv ";  
  }
}




