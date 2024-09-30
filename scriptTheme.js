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

//pour chaque theme, rajouter une function random ci dessus ainsi que les variables ci-dessous
let histoires = [worldWar2, marieCurie] ;
let histRand = Randhist(histoires);

let crimes = [crime1] ;
let crimeRand = RandCrime(crimes);

let themeQuestion = document.querySelectorAll(".theme");

let mesQuestions = [histRand, questions, films, sport, science, langue, crimeRand]; // pensez à mettre les themes (nom array) ici
let quesRand = RandArray(mesQuestions);

// -------------Text des Thèmes-------------------
function textTheme(){
  if (quesRand === histRand) {
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
  } else if (quesRand === science) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Science" `;
    }
  } else if (quesRand === langue) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Langue" `;
    }
  } else if (quesRand === crimes) {
    for (let tout = 0; tout < themeQuestion.length; tout++) {
      themeQuestion[tout].innerText = ` "Crime" `;
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