let buttonAlltheme = document.querySelector(".all-theme");
let wrapTheme = document.querySelector(".wrap-theme ul");
let clearWrapTheme = document.querySelector(".wrap-theme");

//bouton "Autre theme"
buttonAlltheme.addEventListener("click", () => {
  wrapTheme.style.display = "flex";
  buttonAlltheme.classList.remove("all-theme");
  buttonAlltheme.classList.add("btnThemeOff");
});

//Fonction Random pour toutes les thématique
function RandArray(array) {
  let rand = (Math.random() * array.length) | 0;
  let quesRand = array[rand];
  return quesRand;
}

//fonction Random pour chaques thèmes
function Randhist(array) {
  let rand = (Math.random() * array.length) | 0;
  let histRand = array[rand];
  return histRand;
}
function RandCrime(array) {
  let rand = (Math.random() * array.length) | 0;
  let crimeRand = array[rand];
  return crimeRand;
}
function RandFilm(array) {
  let rand = (Math.random() * array.length) | 0;
  let FilmRand = array[rand];
  return FilmRand;
}
function Randsport(array) {
  let rand = (Math.random() * array.length) | 0;
  let sportRand = array[rand];
  return sportRand;
}
function Randscience(array) {
  let rand = (Math.random() * array.length) | 0;
  let scienceRand = array[rand];
  return scienceRand;
}
function Randlangue(array) {
  let rand = (Math.random() * array.length) | 0;
  let langueRand = array[rand];
  return langueRand;
}
function Randserie(array) {
  let rand = (Math.random() * array.length) | 0;
  let serieRand = array[rand];
  return serieRand;
}

//pour chaque theme, rajouter une function random ci dessus ainsi que les variables ci-dessous
let histoires = [worldWar2, marieCurie] ;
let histRand = Randhist(histoires); //à rajouter pour chaque sous-catégorie

let crimes = [crime1, crime2] ;
let crimeRand = RandCrime(crimes);

let  films = [harryPotter] ;
let filmRand = RandCrime(films);

let sports = [rugby] ;
let sportRand = RandCrime(sports);

let sciences = [science1] ;
let scienceRand = RandCrime(sciences);

let langues = [anglais1] ;
let langueRand = RandCrime(langues);

let series = [serie1] ;
let serieRand = RandCrime(series);

let themeQuestion = document.querySelectorAll(".theme");

let mesQuestions = [histRand, serieRand, filmRand, sportRand, scienceRand, langueRand, crimeRand]; // pensez à mettre les themes (nom array) ici
let quesRand = RandArray(mesQuestions);

// -------------Text des Thèmes-------------------
function textTheme(){
  if (quesRand === histRand) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Histoire" `; //rajouter pour chaque nouveau theme
    }
  } else if (quesRand === filmRand) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Film" `;
    }
  } else if (quesRand === sportRand) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Sport" `;
    }
  } else if (quesRand === scienceRand) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Science" `;
    }
  } else if (quesRand === langueRand) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Langue" `;
    }
  } else if (quesRand === crimeRand) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Crime" `;
    }
  } else if (quesRand === serieRand) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Serie Tv" `;
    }
  } else {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Bug" `;
    }
  }
}
textTheme();

// ----------Choix des thèmes avec bouton ---------------
let btnHistoire = document.querySelector(".t-histoire"); // à rajouter si nouveau thème
let btnSerie = document.querySelector(".t-serie");
let btnFilm = document.querySelector(".t-film");
let btnSport = document.querySelector(".t-sport");
let btnScience = document.querySelector(".t-science");
let btnLangue = document.querySelector(".t-langue");
let btnCrime = document.querySelector(".t-crime");

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