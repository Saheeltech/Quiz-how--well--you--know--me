
var readlineSync=require("readline-sync")
var userName=readlineSync.question("what is your name ? ");
console.log("welcome " + userName + ", How well you know Sahil ",",keep first alphabet capital");
Score=0;
function play(question, answer){
  var userAnswer=readlineSync.question(question);
  if (userAnswer===answer){
    console.log("Right!");
    Score=Score+1;
  }
  else{
    console.log("wrong!");
  }

  console.log("current Score is: ", Score);
  }
  var questions=[{
    question:"where do I live? ",
    answer:"Bhusawal"

  },
  {
    question:"What is my native language? ",
    answer:"Hindi"
  },
  {
    question:"What is my favorite color? ",
    answer:"Blue"
  },
  {
    question: "where is my university?",
    answer:"Loni kalbhor"
  },
  {
    question: "where did I completed my 12th std?",
    answer:"Burhanpur"
  },];

  for(var i=0;i< questions.length; i++) 
  {
    var currentquestion=questions[i];
    play(currentquestion.question, currentquestion.answer)
  }
  console.log("----------------------")
  console.log("welldone your score is: ", Score)