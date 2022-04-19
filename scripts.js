
var quiz = [];

// table of all the posible quiz questions and answers
quiz[0] = new Question("Hola", "languages/spanish.mp3", "Spanish", "Italian", "Cyric");
quiz[1] = new Question("Hello", "languages/english.mp3", "English", "Spanish", "French");
quiz[2] = new Question("Haye", "languages/udhr_somali.mp3", "Somali", "Norwegian", "Swedish");

var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});


// read which parts of each string are what
function Question(question,audio,rightAnswer,wrongAnswer1,wrongAnswer2) {
    this.question = question;
    this.audio = audio;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
};

// math to shuffle
function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
  shuffle(answers);
  
// define the parts of the question further i think
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("audio").innerHTML= randomQuestion.audio;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
	
  document.getElementById("audio").onclick = function () {
    audio_clicked(randomQuestion.audio);
}


}

// what do when play audio button clicked
function audio_clicked(randomQuestion.audio) {
      new Audio(randomQuestion.audio);
      audio.play();
}

// what to do when answer a button clicked
function answerA_clicked() {
  var answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
}

// what to do when answer b button clicked
function answerB_clicked() {
		var answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}

// what to do when answer c button clicked
function answerC_clicked() {
  var answerC = document.getElementById("answerC").value;
  	
		checkAnswer(answerC);
}

// check if correct to adjust score
function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    currentScore++;
  } else {
    if (currentScore > 0) {
      currentScore--;
  	}
  }
  document.getElementById("score").innerHTML = currentScore;
}

// what to do if it is correct or incorrect
function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
  } else { 
    
    adjustScore(false);
  }	  
}

