var readlineSync = require('readline-sync');
var userName = readlineSync.question("What's your name?");
console.log("Hi " + userName + " . Let's begin with the quiz!");
var score = 0;


//function
function play(question, answer){
  var userAnswer = readlineSync.question(question);
   if(userAnswer===answer){
     console.log("Correct!")
     score++;
   }
   else{
     console.log("wrong")
   } 
    console.log("Score: "+ score);
    console.log("-----------")
}

//array of objects
var questions =[
{
  question : "What's my fav tv series?",
  answer: "brooklyn nine nine"
},
{
  question :"What's my fav food?",
  answer:"pizza"
},
{
  question :"Who's my fav marvel hero?",
  answer:"captain america"
},
{
  question : "Do I wear glasses?",
  answer : "yes"
},
{
  question :"Which flowers are my fav?",
  answer: "rose"
}
];

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

//final score display
console.log("You completed the quiz. Your final score is " + score);
