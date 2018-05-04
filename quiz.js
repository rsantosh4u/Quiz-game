
var correct = 0;

var answer1 = prompt("What is your favourite color");
if ( answer1.toUpperCase() === 'blue' ) {
 correct += 1; 
}
var answer2 = prompt("What is your favourite game");
if ( answer2.toUpperCase() === 'cricket' ) {
 correct += 1; 
}
var answer3 = prompt("What is your favourite programming language");
if ( answer3.toUpperCase() === 'javascript' ) {
 correct += 1; 
}


document.write("<p>You got " + correct + " out of 3 questions correct.<p>");

if ( correct === 3 ) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");  
} else if (correct >= 2) {
  document.write("<p><strong>You earned a silver crown.</strong></p>");   
} else {
  document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}
