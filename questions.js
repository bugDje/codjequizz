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
    options: ["un Pigeon", "un Corbeau", "un Drone", "un Smartphone"],
  },
  {
    numb: 4,
    question: `Quel est le nom de l'Opération durant le débarquement de Normandie le 6 juin 1944 ?`,
    answer: "Opération Overlord",
    options: [
      "Opération coup de poing",
      "Opération Cobra",
      "Opération Overlord",
      "Opération Barbarossa",
    ],
  },
  {
    numb: 5,
    question: `Qui a conçu les uniformes des soldats Allemands lors de la Seconde Guerre Mondiale ?`,
    answer: "Hugo Boss",
    options: [
      "Jean-Paul Gaultier",
      "Louis Vuitton",
      "Hugo Boss",
      "Le ministère Allemand",
    ],
  },
];
// -----Film-----
let films = [
  {
    numb: 1,
    question: `Quel est le prénom du Professeur Rogue ?`,
    answer: "Severus",
    options: ["Sirius", "Rubeus", "Quirinus", "Severus"],
  },
  {
    numb: 2,
    question: `Comment s'appelle le fantôme de la maison PoufSouffle ?`,
    answer: "Le moine gras",
    options: [
      "Le pasteur Rob",
      "Le fou du roi",
      "Le moine gras",
      "Le prêtre du Château",
    ],
  },
  {
    numb: 3,
    question: `Dans Harry Potter à l'école des sorciers, Qui est le professeur contre les forces du mal ?`,
    answer: "Le professeur Quirrell",
    options: [
      "Le professeur Rogue",
      "Le professeur Maugrey",
      "Le professeur Quirrell",
      "Le professeur Têtenjoy",
    ],
  },
  {
    numb: 4,
    question: `Dans quel pub de pre-au-lard a lieu la première réunion de l'armée de Dumbledore ?`,
    answer: "A la tête de sanglier",
    options: [
      "Aux trois balais",
      "Au V&B",
      "A la tête de sanglier",
      "Au chaudron baveur",
    ],
  },
  {
    numb: 5,
    question: `Combien y a t-il de balles au jeu de Quidditch ?`,
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
];

//--------sport--------

let sport = [
  {
    numb: 1,
    question: `Quelle fut la toute première rencontre internationale de l'histoire du rugby à XV ?`,
    answer: "Angleterre - Ecosse",
    options: ["Angleterre - Australie", "Angleterre - Irlande", "Angleterre - Pays de Galles", "Angleterre - Ecosse"],
  },
  {
    numb: 2,
    question: `En quelle année le rugby est-il devenu un sport professionnel ? ?`,
    answer: "1995",
    options: [
      "1965",
      "1975",
      "1985",
      "1995",
    ],
  },
  {
    numb: 3,
    question: `Quel était l’un des surnoms de Sébastien Chabal ?`,
    answer: "L'anesthésiste",
    options: [
      "L'arracheur de dents",
      "L'anesthésiste",
      "Le boucher",
      "Le bucheron",
    ],
  },
  {
    numb: 4,
    question: `Laquelle de ces sélections nationales possède un palmier comme emblème ?`,
    answer: "Les Fidji",
    options: [
      "L'Argentine",
      "Les Tonga",
      "Les Fidji",
      "Les iles Samoa",
    ],
  },
  {
    numb: 5,
    question: `Laquelle de ces variantes du rugby n’existe pas ?`,
    answer: "Le Chase Rugby",
    options: ["Le Beach Rugby", "Le Chase Rugby", "Le Beach Rugby", "Le Touch Rugby"],
  },
];

let themeQuestion = document.querySelectorAll(".theme");

let mesQuestions = [histoires, questions, films, sport]; // pensez à mettre les themes (nom array) ici
let quesRand = RandArray(mesQuestions);

// -------------Text des Thèmes-------------------
function textTheme(){
  if (quesRand === histoires) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Histoire" `; //rajouter pour chaque nouveau theme
    }
  } else if (quesRand === films) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Film" `;
    }
  } else if (quesRand === sport) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Sport" `;
    }
  } else {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Serie Tv" `;
    }
  }
}
textTheme();

// ----------Choix des thèmes avec bouton ---------------
let btnHistoire = document.querySelector(".t-histoire"); // à rajouter si nouveau thème
let btnSerie = document.querySelector(".t-serie");
let btnFilm = document.querySelector(".t-film");
let btnSport = document.querySelector(".t-sport");

btnHistoire.addEventListener("click", () => {
  quesRand = mesQuestions[0];
  info_box.classList.add("activeInfo");
  clearWrapTheme.style.display = "none";
  clicRing();
  textTheme();
});
btnSerie.addEventListener("click", () => {
  quesRand = mesQuestions[1];
  info_box.classList.add("activeInfo");
  clearWrapTheme.style.display = "none";
  clicRing();
  textTheme();
});
btnFilm.addEventListener("click", () => {
  quesRand = mesQuestions[2];
  info_box.classList.add("activeInfo");
  clearWrapTheme.style.display = "none";
  clicRing();
  textTheme();
});
btnSport.addEventListener("click", () => {
  quesRand = mesQuestions[3];
  info_box.classList.add("activeInfo");
  clearWrapTheme.style.display = "none";
  clicRing();
  textTheme();
});
