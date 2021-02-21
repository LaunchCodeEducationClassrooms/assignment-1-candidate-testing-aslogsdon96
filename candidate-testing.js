const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = ["Who was the first American woman in space? ","True or false: 5000 meters = 5 kilometers. ","(5+3)/2+10 = ? ","Given the array [8,'Orbit','Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name.");
return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswers[0] = input.question(questions[0]);
  console.log(`Your answer: ${candidateAnswers[0]}. \nCorrect answer: ${correctAnswers[0]}.\n`);

  candidateAnswers[1] = input.question(questions[1]);
  console.log(`Your answer: ${candidateAnswers[1]}. \nCorrect answer: ${correctAnswers[1]}.\n`);

  candidateAnswers[2] = input.question(questions[2]);
  console.log(`Your answer: ${candidateAnswers[2]}. \nCorrect answer: ${correctAnswers[2]}.\n`);

  candidateAnswers[3] = input.question(questions[3]);
  console.log(`Your answer: ${candidateAnswers[3]}. \nCorrect answer: ${correctAnswers[3]}.\n`);
  
  candidateAnswers[4] = input.question(questions[4]);
  console.log(`Your answer: ${candidateAnswers[4]}. \nCorrect answer: ${correctAnswers[4]}.\n`);
  
  return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade;
  let numberCorrect = 0;
  for (let i = 0; i < correctAnswers.length; i++){
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      numberCorrect++
     }
  }
  grade = (numberCorrect/correctAnswers.length)*100;
  console.log(`>>> Overall Grade: ${grade}% (${numberCorrect} of ${correctAnswers.length} responses correct) <<<`);
  
  if (grade > 80) {
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<");
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\nCandidate Name: ${candidateName}`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};