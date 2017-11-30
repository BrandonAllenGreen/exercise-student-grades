
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

let grade = "";
let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let gradeF = 0;

function countGrades() {
  for(i = 0; i < scores.length; i++) {
    grade = scores[i];
    switch (true) {
      case (grade > 90):
          gradeA++;
          break;
      case (grade > 80 && grade < 91):
          gradeB++         
          break;
      case (grade > 70 && grade < 81):
          gradeC++;         
          break;
      case (grade > 60 && grade < 71):
          gradeD++;
          break;
      case (grade > 49 && grade < 61):
          gradeF++;
    }
  }
}

function displayTotals() {
  let gradeArr = [gradeA, gradeB, gradeC, gradeD, gradeF];
  let letters = ["A", "B", "C", "D", "F"]
  for (j = 0; j < gradeArr.length; j++) {
  console.log("Class has " + gradeArr[j] + " grades of " + letters[j]);
  }
}

function lowScore() {
  scores.sort();
  lowNum = scores.shift()
  console.log("Lowest grade is " + lowNum);
}

function highScore() {
  scores.sort();
  highNum = scores.pop();
  console.log("Highest grade is " + highNum);
}

countGrades();
displayTotals();
lowScore();
highScore();
 
 
 
  
  
 