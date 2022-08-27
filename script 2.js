const quizData = [
    {
        quiz: "ㅅ ㅇ",
        answer: "서울"
    },
    {
        quiz: "ㅅ ㄴ",
        answer: "성남"
    },
    {
        quiz: "ㄱ ㅇ",
        answer: "고양"
    },
    {
        quiz: "ㄴ ㅇ ㅈ",
        answer: "남양주"
    },
    {
        quiz: "ㅅ ㅇ (경기도)",
        answer: "수원"
    },
    {
        quiz: "ㅊ ㅇ",
        answer: "천안"
    },
    {
        quiz: "ㅂ ㅅ",
        answer: "부산"
    },
    {
        quiz: "ㅇ ㅊ",
        answer: "인천"
    },
    {
        quiz: "ㅎ ㄴ",
        answer: "하남"
    },
    {
        quiz: "ㅇ ㅈ ㅂ",
        answer: "의정부"
    }
];

let $quizSentence = document.querySelector(".quiz-sentence");
let quizNumber = 0;
const $userInput = document.querySelector(".inputFromKey");
const $ok_btn = document.querySelector("#ok-btn");
$ok_btn.addEventListener('click', check_answer);
const $pass_btn = document.querySelector("#pass-btn");
$pass_btn.addEventListener('click', tonggwa);
let score = 0;
let currentquizData;
let $scoreValue = document.querySelector("#scoreValue");
let $quizNumber = document.querySelector("#quiz-number");
loadquiz();
let bun = 0;
let cho = 0;
let centi = 0;
let spancho = document.getElementById('cho');
let spancenti = document.getElementById('centi');
let interval;

function loadquiz() {
    $userInput.value = "";
    currentquizData = quizData[quizNumber];
    $quizSentence.innerText = currentquizData.quiz;
    $quizNumber.innerText = quizNumber + 1;
    setInterval(startTimer, 10); 
}

async function check_answer() {
    let isCorrect = "";
    if($userInput.value === currentquizData.answer) {
        score++;
        score++;
        score++;
        score++;
        score++;
        score++;
        score++;
        score++;
        score++;
        score++;
        isCorrect = "맞음";
    } else {
        score--;
        score--;
        score--;
        score--;
        score--;
        isCorrect = "틀림";
    }
    $quizSentence.innerText = isCorrect; 
    await delay(1);
    $scoreValue.innerText = score;
    quizNumber++;
    if(quizNumber < quizData.length) {
        loadquiz();
    } else {
        clearInterval(); 
        $quizSentence.innerText = `점수:${score}점/총100점`;
    }
}
async function tonggwa(){
    quizNumber++;
    loadquiz();
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
    }

function startTimer() {
  centi++;
  if(centi<=9){
    spancenti.innerText = '0'+centi;
  }else{
    spancenti.innerText = centi;
  }

  if(centi>99){
    cho++;

    spancho.innerText = cho;
    centi = 0;
    spancenti.innerText = '0';
  }
}