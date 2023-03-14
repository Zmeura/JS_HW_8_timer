//Timer//
let timeSecond = 2400;
const timeH = document.querySelector("h1");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond <= 0) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
`;
}

function endCount() {
  timeH.innerHTML = "Время вышло!";
}

//Результат тесту//

const result = document.querySelector("#result");
const questionNumber = document.querySelectorAll(".test-number");
const sendBtn = document.querySelector("#sendBtn");
let question = document.querySelectorAll(
  'input[type="radio"], input[type="checkbox"]'
);
let mark = 0;
test.addEventListener("click", function (e) {
  console.log(e);
});

for (i = 0; i < questionNumber.length; i++) {
  questionNumber[i].innerHTML = `<b>${i + 1}.</b> `;
}

sendBtn.addEventListener("click", getResult);

function getResult(e) {
  e.preventDefault();
  for (i = 0; i < question.length; i++) {
    if (question[i].checked == true && question[i].value == "true") {
      ++mark;
      result.innerHTML = `Правильные ответы: ${mark}`;
      question[i].parentElement.classList.toggle("bgGreen");
    } else if (question[i].checked == true && question[i].value == "on") {
      question[i].parentElement.classList.toggle("bgRed");
    }
  }
  this.disabled = true;
}
