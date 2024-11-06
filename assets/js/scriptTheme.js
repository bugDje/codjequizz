let buttonAlltheme = document.querySelector(".all-theme"),
  wrapTheme = document.querySelector(".wrap-theme ul"),
  clearWrapTheme = document.querySelector(".wrap-theme");

let thematiqueSelect = document.getElementById("thematique"),
  themeSelect = document.getElementById("theme");

let themeSelectVisibility = document.querySelector(".s-theme"),
  thematiqueSelectVisibility = document.querySelector(".s-thematique");

let thematiqueTitle = document.querySelector(".thematique-title"),
  themeTitle = document.querySelector(".theme-title");

let themeQuestion = document.querySelectorAll(".theme");

//bouton "Autre theme"
buttonAlltheme.addEventListener("click", () => {
  thematiqueSelectVisibility.style.visibility = "visible";
  buttonAlltheme.classList.remove("all-theme");
  buttonAlltheme.classList.add("btnThemeOff");
});

// Fonction pour afficher les thèmes en fonction de la thématique choisie
function afficherThemes() {
  // Récupérer la thématique sélectionnée
  var thematiqueChoisie = thematiqueSelect.value;

  // Réinitialiser la liste des thèmes
  themeSelect.innerHTML = "";

  // Ajouter une option par défaut
  var defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Veuillez choisir un thème";
  defaultOption.disabled = true; // Désactiver cette option
  defaultOption.selected = true; // La rendre sélectionnée par défaut
  themeSelect.appendChild(defaultOption);

  // Définir les thèmes disponibles pour chaque thématique
  var themes = {
    Histoire: ["Seconde Guerre mondiale", "Marie Curie"],
    Crime: ["Crime 1", "Crime 2"],
    Film: ["Film 1", "Harry Potter"],
    Sport: ["Rugby", "Sport 1"],
    Science: ["Science 1", "Science 2", "Science 3"],
    Langue: ["Anglais 1", "Anglais 2"],
    Serie: ["Serie 1", "Serie 2"],
    Games: ["Games 1", "Games 2"],
  };

  // Si la thématique choisie a des thèmes associés
  if (thematiqueChoisie in themes) {
    themeSelectVisibility.style.visibility = "visible"; // Rendre le sélecteur visible
    // Ajouter chaque thème à la liste
    themes[thematiqueChoisie].forEach(function (theme) {
      var option = document.createElement("option");
      option.value = theme;
      option.textContent = theme;
      themeSelect.appendChild(option);
    });
  }
}

// Écouter les changements dans le sélecteur de thématiques
thematiqueSelect.addEventListener("change", afficherThemes);

// Écouter les changements dans le sélecteur de thèmes
themeSelect.addEventListener("change", () => {
  const selectedValue1 = thematiqueSelect.value; // Thématique sélectionnée
  const selectedValue2 = themeSelect.value; // Thème sélectionné

  // Mettre à jour l'affichage des titres
  thematiqueTitle.innerHTML = `Catégorie: <em style="color:var(--first-color);">${selectedValue1}</em>`;
  themeTitle.innerHTML = `Thème: <em style="color:var(--first-color);">${selectedValue2}</em>`;

  // Logique pour gérer les thèmes sélectionnés
  const themeMapping = {
    //"tableau var theme": tableau etape2,
    "Seconde Guerre mondiale": histoires[0],
    "Marie Curie": histoires[1],

    "Crime 1": crimes[0],
    "Crime 2": crimes[1],

    "Film 1": films[1],
    "Harry Potter": films[0],

    "Rugby": sports[0],           
    "Sport 1": sports[1], 

    "Science 1": sciences[0],
    "Science 2": sciences[1],
    "Science 3": sciences[2],

    "Anglais 1":langues[0],
    "Anglais 2":langues[1],

    "Serie 1":series[0],
    "Serie 2":series[1],

    "Games 1":games[0],
    "Games 2":games[1],
  };

  quesRand = themeMapping[selectedValue2]; // Récupérer la question correspondante

  // Afficher les informations et préparer le quiz
  info_box.classList.add("activeInfo");
  clearWrapTheme.style.display = "none";

  clicRing();
  textTheme();
});

// Initialiser les thèmes lors du chargement de la page
afficherThemes();

/* Pour rajouter/modifier une thematique, suivre les 7 étape*/

/* Pour rajouter/modifier un theme, suivre étape 2 seulements*/

//fonction Random pour chaques thèmes
//------------------------> étape1 <-------------------------
function Rand(array) {
  let rand = Math.floor(Math.random() * array.length);
  return array[rand];
}
// tableaux pour chaque thème
let histoires = [worldWar2, marieCurie];
let crimes = [crime1, crime2];
let films = [harryPotter, film1];
let sports = [rugby, sport1];
let sciences = [science1, science2, science3];
let langues = [anglais1, anglais2];
let series = [serie1, serie2];
let games = [game1, game2];

// aléatoire pour chaque sous-catégorie
let histRand = Rand(histoires);
let crimeRand = Rand(crimes);
let filmRand = Rand(films);
let sportRand = Rand(sports);
let scienceRand = Rand(sciences);
let langueRand = Rand(langues);
let serieRand = Rand(series);
let gameRand = Rand(games);

//tableau avec toutes les questions aléatoires
let mesQuestions = [
  histRand,
  serieRand,
  filmRand,
  sportRand,
  scienceRand,
  langueRand,
  crimeRand,
  gameRand,
];


let quesRand = RandArray(mesQuestions);
// -------------Text des Thèmes-------------------

// tableau d'objets pour associer les thèmes à leurs valeurs pour les titres
const themes = [
  { key: histRand, text: "Histoire" },
  { key: filmRand, text: "Film" },
  { key: sportRand, text: "Sport" },
  { key: scienceRand, text: "Science" },
  { key: langueRand, text: "Langue" },
  { key: crimeRand, text: "Crime" },
  { key: serieRand, text: "Serie Tv" },
  { key: gameRand, text: "Jeux video" },
];

function textTheme() {
  let themeText = thematiqueSelect.value; // Valeur par défaut

  // Vérifiez si quesRand correspond à l'une des clés de l'objet themes
  for (const theme of themes) {
    if (quesRand === theme.key) {
      // Comparaison directe
      themeText = theme.text;
      break; // Sortir de la boucle une fois que le thème est trouvé
    }
  }
  // Mettez à jour le texte de tous les éléments de thème
  for (let tout = 0; tout < themeQuestion.length; tout++) {
    themeQuestion[tout].innerText = ` "${themeText}" `;
  }
}
textTheme();

//---------------Afficher le titre des themes--------------
let currentThemeText = [];
themeQuestion.forEach((element) => {
  currentThemeText.push(element.innerText);
  thematiqueTitle.innerHTML = `Theme Du jour: <em style="color:var(--first-color);">${currentThemeText}</em>`;
});

// ----------Choix des thèmes avec bouton ---------------

//------------------------> étape5 <-------------------------
let btnHistoire = document.querySelector(".t-histoire"); // à rajouter si nouveau thème
let btnSerie = document.querySelector(".t-serie");
let btnFilm = document.querySelector(".t-film");
let btnSport = document.querySelector(".t-sport");
let btnScience = document.querySelector(".t-science");
let btnLangue = document.querySelector(".t-langue");
let btnCrime = document.querySelector(".t-crime");
let btnGame = document.querySelector(".t-game");
//étape5

//------------------------> étape6 <-------------------------
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
btnScience.addEventListener("click", () => {
  quesRand = mesQuestions[4];
  info_box.classList.add("activeInfo");
  clearWrapTheme.style.display = "none";
  clicRing();
  textTheme();
});
btnLangue.addEventListener("click", () => {
  quesRand = mesQuestions[5];
  info_box.classList.add("activeInfo");
  clearWrapTheme.style.display = "none";
  clicRing();
  textTheme();
});
btnCrime.addEventListener("click", () => {
  quesRand = mesQuestions[6];
  info_box.classList.add("activeInfo");
  clearWrapTheme.style.display = "none";
  clicRing();
  textTheme();
});
btnGame.addEventListener("click", () => {
  quesRand = mesQuestions[7];
  info_box.classList.add("activeInfo");
  clearWrapTheme.style.display = "none";
  clicRing();
  textTheme();
});
//étape6

//------------------------> étape7 <-------------------------
/* rajouter le theme sur la liste de index.html*/
