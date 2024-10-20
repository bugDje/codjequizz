const start_btn = document.querySelector(".start-quizz button");
const info_box = document.querySelector(".box-quizz");
const exit_btn = info_box.querySelector(".buttons-quizz .quit-quizz");
const continue_btn = info_box.querySelector(".buttons-quizz .restart-quizz");
const quiz_box = document.querySelector(".quizz");
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector(".quizz-time .time_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeOff = quiz_box.querySelector("header .time_text");

const colorPicker = document.getElementById('colorPicker');

//modifie la couleur du site (via tinicolor script)
colorPicker.addEventListener('input',()=>{  
  const selectColor = colorPicker.value;

  //récupère le code couleur hsl dans la bibliotheque de tinicolor
  const tcColor = tinycolor(selectColor);
  const hue = tcColor.toHsl().h; // permet d'obtenir la teinte

  //met à jour la propriété css
  document.documentElement.style.setProperty('--hue', hue);

})

//bruitage
const chronoRing = () => {
  const audio = new Audio();
  audio.src = "./audio/toucheclavier.mp3";
  audio.play();
};
const erreurRing = () => {
  const audio = new Audio();
  audio.src = "./audio/buzzperdu.mp3";
  audio.play();
};
const fortRing = () => {
  const audio = new Audio();
  audio.src = "./audio/bravo3.mp3";
  audio.play();
};
const correctRing = () => {
  const audio = new Audio();
  audio.src = "./audio/correct.mp3";
  audio.play();
};
const tingRing = () => {
  const audio = new Audio();
  audio.src = "./audio/Ting.mp3";
  audio.play();
};
const clicRing = () => {
  const audio = new Audio();
  audio.src = "./audio/clic.mp3";
  audio.play();
};
const vaincRing = () => {
  const audio = new Audio();
  audio.src = "./audio/bravo1.mp3";
  audio.play();
};
const moyRing = () => {
  const audio = new Audio();
  audio.src = "./audio/ohdommage.mp3";
  audio.play();
};
const perdRing = () => {
  const audio = new Audio();
  audio.src = "./audio/perdu1.mp3";
  audio.play();
};
const pageRing = () => {
  const audio = new Audio();
  audio.src = "./audio/pagesuivanterapide.mp3";
  audio.play();
};
const restartRing = () => {
  const audio = new Audio();
  audio.src = "./audio/revenirenarriere.mp3";
  audio.play();
};

//button menu
start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
  clearWrapTheme.style.display = "none";
  clicRing();
};

exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  clearWrapTheme.style.display = "flex";
  clicRing();
};

continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuestions(0);
  queCounter(1);
  startTimer(15);
  startTimerLine(0);
  pageRing();
};

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;
const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_quizz");
const restart_quiz = result_box.querySelector(".buttons-quizz .restart-quizz");
const quit_quiz = result_box.querySelector(".buttons-quizz .quit-quizz");

restart_quiz.onclick = () => {  
    // Mélangez les options de chaque question
    quesRand.forEach(question => {
        question.options = shuffleArray([...question.options]); //le spread operator [...] pour ne pas modifier l'original
    });
    // Fin du mélange    
  quiz_box.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");
  timeValue = 15;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;   
  showQuestions(que_count);
  queCounter(que_numb);
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(timeValue);
  startTimerLine(widthValue);
  next_btn.style.display = "none";
  restartRing();
};
quit_quiz.onmousedown = () => {
  clicRing();
};
quit_quiz.onclick = () => {
  window.location.reload();
};
next_btn.onclick = () => {
  if (que_count < quesRand.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Temps Restant";
    pageRing();
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResultBox();
  }
};
function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  let que_tag =
    "<span>" +
    quesRand[index].numb +
    ". " +
    quesRand[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    quesRand[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    quesRand[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    quesRand[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    quesRand[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
let iCorrect = `<div class="icon-quizz"><img src="image/check.svg" alt="icone Check"></div>`;
let iIncorrect = `<div class="icon-quizz"><img src="image/cross.svg" alt="icone Cross"></div>`;

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correctAns = quesRand[que_count].answer;
  let allOptions = option_list.children.length;

  if (userAns == correctAns) {
    userScore += 1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", iCorrect);
    correctRing();
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", iIncorrect);
    erreurRing();

    for (let i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correctAns) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", iCorrect);
      }
    }
  }
  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.style.display = "block";
}
function showResultBox() {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");
  if (userScore == 5) {
    fortRing();
    let scoreTag = `<span>Et WAaaOouuH!! tu as eu<p>${userScore}</p>bonnes réponses sur<p>${quesRand.length}</p>questions ! INCROYABLE !!!!</span>`;
    scoreText.innerHTML = scoreTag;
  } else if (userScore >= 3) {
    vaincRing();
    let scoreTag = `<span>Et Bravo! tu as fait<p>${userScore}</p>bonnes réponses sur<p>${quesRand.length}</p>questions.</span>`;
    scoreText.innerHTML = scoreTag;
  } else if (userScore >= 1) {
    moyRing();
    let scoreTag = `<span>Malheureusement, tu as seulement 
            <p>${userScore}</p>bonnes réponses sur<p>${quesRand.length}</p>questions.
          </span>`;
    scoreText.innerHTML = scoreTag;
  } else {
    perdRing();
    let scoreTag = `<span>Oh Non! par contre tu as<p>${userScore}</p>bonne réponse sur<p>${quesRand.length}</p>questions.</span>`;
    scoreText.innerHTML = scoreTag;
  }
}
function queCounter(index) {
  const bottom_ques_counter = quiz_box.querySelector(".total_que");
  let totalQuesCountTag = `<span>Questions<p>${index}</p>sur<p>${quesRand.length}</p></span>`;
  bottom_ques_counter.innerHTML = totalQuesCountTag;
}
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {   
    timeCount.textContent = time;
    time--;
    chronoRing();
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      tingRing();
      clearInterval(counter);
      timeCount.textContent = "00";
      timeOff.textContent = "Temps Écoulé";
      let correctAns = quesRand[que_count].answer;
      let allOptions = option_list.children.length;
      for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correctAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", iCorrect);
        }
      }
      for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
      }
      next_btn.style.display = "block";
    }
  }
}
function startTimerLine(time) {
  counterLine = setInterval(timer, 160);
  function timer() {
    time += 1;
    timeLine.style.width = time + "%";
    if (time > 99) {
      clearInterval(counterLine);
    }
  }
}
//Fonction Random pour toutes les thématique
function RandArray(array) {
  let rand = (Math.random() * array.length) | 0;
  let quesRand = array[rand];
  return quesRand;
}
// Fonction pour mélanger un tableau
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Échange
  }
  return array;
}
// Fonction pour mélanger un tableau
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Échange
  }
  return array;
}


