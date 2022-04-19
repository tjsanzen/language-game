//variables
var quiz = [];
quiz[0] = new Question("𐒛𐒆𐒖𐒒𐒖𐒔𐒖 𐒊𐒖𐒑𐒑𐒛𐒒𐒂𐒕𐒈 𐒓𐒚𐒄𐒓 𐒊𐒖𐒉𐒛 𐒘𐒈𐒖𐒌𐒝 𐒄𐒙𐒇 𐒖𐒔 𐒏𐒖𐒒𐒖 𐒈𐒘𐒑𐒖𐒒 𐒄𐒖𐒌𐒌𐒖 𐒉𐒖𐒇𐒖𐒍𐒂𐒖 𐒘𐒕𐒙 𐒄𐒚𐒎𐒓𐒎𐒖𐒆𐒖 𐒓𐒖𐒄𐒛 𐒖𐒐𐒐𐒗 (𐒘𐒐𐒛𐒔) 𐒈𐒕𐒕𐒖𐒕 𐒖𐒎𐒝𐒒 𐒘𐒕𐒙 𐒓𐒖𐒋𐒕𐒘, 𐒓𐒛𐒒𐒖 𐒘𐒒 𐒎𐒙𐒍 𐒐𐒖 𐒖𐒇𐒏𐒛 𐒎𐒙𐒍𐒏𐒖 𐒏𐒖𐒐𐒗 𐒚𐒐𐒖 𐒊𐒖𐒎𐒑𐒛 𐒈𐒘 𐒓𐒖𐒐𐒛𐒐𐒂𐒘𐒒𐒘𐒑𐒙 𐒖𐒔.", "Somali", "Bahrani Arabic", "Amharic");
quiz[1] = new Question("What color is blood?", "Red", "White", "Green");
quiz[2] = new Question("What color is grass?", "Green", "White", "Red");
quiz[3] = new Question("How many legs does a spider have?", "8", "6", "4");
quiz[4] = new Question("Who is the king of the Netherlands?", "Willem-Alexander", "Willem-Alexzelf", "Willem-Alexniemand");
quiz[5] = new Question("What is 2-2?", "0", "2", "4");
quiz[6] = new Question("What was Vincent van Gogh?", "Artist", "Baker", "Jobless");
var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];

}

function answerA_clicked() {
  var answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
}

function answerB_clicked() {
		var answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}
function answerC_clicked() {
  var answerC = document.getElementById("answerC").value;
  	
		checkAnswer(answerC);
}

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

function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
  } else { 
    adjustScore(false);
  }	  
}
