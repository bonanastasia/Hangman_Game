
// startGame();

// function startGame(){



//something to hold words (array)
var wordChoices = ["wordon", "wordtwo", "wordthree" ];
//some way to randomly select a word from the array (Math.floor(Math.random()*array.length))
// var currentWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];
var currentWord=[];
var generateWord=function(){
	currentWord=wordChoices[Math.floor(Math.random()*wordChoices.length)];
};

			// //a counter for wins (var countWins)
			// var countWins=0;
			// //a counter for losses (var countLosses)
			// var countLosses=0;
			// //derive from incorrect guesses
			// var guessesLeft6;
			// var displayWord=[];
			// var correctGuesses=[];
			// var incorrectGuesses=[];
			// //take correctGuesses and currentWord, compare with loop
    //use myString.split('')
//something to hold the "skeleton" (letter holders)

//compare skeletonWord to presence of placeholders
var wordComplete=false;
//invoke this on NEW WORD

// var letterChecker = function(){
//      currentWord.split('').forEach(function(c){
//      if(correctGuesses.indexOf(c)===-1){
//          skeletonWord+="_";
//          isWordComplete=false;
//      }else{
//      skeletonWord+= userGuess;
        //Check to see if word is complete by if there are any placeholders
            //**if(skeletonWord.charAt
        // }
 // });
// };
//get value
//evaluate guess( if correct, add to correct guesses if incorrect, add
// //iterate through current word
// for(var i=0; i<currentWord.length; i++){
//  //only add letter to correct guesses if the character is found AND a
//  //unique character
// if(userGuess === currentWord.charAt(i) &&  correctGuess.indexOf(i)===-1){
//  correctGuesses+=i;
//  letterChecker(userGuess);
//  console.log("the new word is " + skeletonWord + "correct guesses:" + correctGuesses);
// }else {
//  incorrectGuesses+=i;
//  console.log("the new word is " + skeletonWord + " incorrect Guesses: "+ incorrectGuesses);
// }
// }
//to incorrect guess----derive guesses left)
//create function that (evaluates guess, current word) then add to correct of incorrect guess arrays
//create new string newSkeletonWord=[]; forEach if userInput if currentWord.split('')
//something to capture keystrokes (key.event?)
//get value
// for (var i = 0; i < currentWord.length; i++) {
//      displayWord[i] = "_";
// };

// var initialVariables = function(){
// countWins = 0;
// //a counter for losses (countLosses)
// countLosses = 0;
// //derive from incorrect guesses
// guessesLeft = 6;
// displayWord = [];
// correctGuesses = [];
// incorrectGuesses =[] ;
// generateWord();
// currentWord="";
// wordComplete=false;

// };

// for (var i = 0; i < currentWord.length; i++) {
//      displayWord[i] = "_";
// };


// var getGuesses = function(c){
// 		if(correctGuesses.indexOf(c)===-1 && displayWord.indexOf(c)!=-1){
// 			correctGuesses+=c;
// 		}else if(correctGuesses.indexOf(c)===-1 && alphabet.includes(c)){
// 			incorrectGuesses += c;
// 	};
// };

var gameReset= function(){
	initialVariables();
}


// var isWordComplete= function(){
// 	displayWord.forEach(function(){
// 		if(displayWord.indexOf("_")===-1){
// 			if(wordComplete=true){
// 				startGame();
// 			}

// 			// countWins++;
// 			// console.log(countWins);
// 			// gameReset();

// 		}else{
// 			wordComplete=false;
// 		};
// 	});
// };


var startGame= function(){

//a counter for losses (var countLosses)
//derive from incorrect guesses
var guessesLeft6;
var displayWord=[];
var correctGuesses=[];
var incorrectGuesses=[];
//take correctGuesses and currentWord, compare with loop
    //use myString.split('')
//something to hold the "skeleton" (letter holders)

//compare skeletonWord to presence of placeholders
var wordComplete=false;

var getGuesses = function(c){
		if(correctGuesses.indexOf(c)===-1 && displayWord.indexOf(c)!=-1){
			correctGuesses+=c;
		}else if(correctGuesses.indexOf(c)===-1 && alphabet.includes(c)){
			incorrectGuesses += c;
	};
};
var isWordComplete= function(){
	displayWord.forEach(function(){
		if(displayWord.indexOf("_")===-1){
			wordComplete=true;

		}else{
			wordComplete=false;
		};
	});
};

var resetGame= function(){
	countWins++;
	window.location.reload();
}

 generateWord();
 console.log(currentWord);

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");


for (var i = 0; i < currentWord.length; i++) {
displayWord[i] = "_";
};



document.onkeyup = function(event) {
        // Determines which key was pressed

        // initialVariables();

      //   for (var i = 0; i < currentWord.length; i++) {
     	// displayWord[i] = "_";
		// };




       
        var userGuess = event.key;

        // generateWord();
        // console.log(currentWord);
    
        // Alerts the key the user pressed (userGuess).
        alert(userGuess);
     //iterate through current word
    for(var i=0; i<currentWord.length; i++){
        //only add letter to correct guesses if the character is found AND a
        //unique character
    if(userGuess === currentWord.charAt(i)){
          displayWord[i] = userGuess;
          isWordComplete();
          if(wordComplete===true){
          	resetGame();
          }
	   };

    //  displayWord.push("_ ");
    // }
    };
    getGuesses(userGuess);
 
    console.log(displayWord);
    console.log("correct: "+ correctGuesses);
    console.log("incorrect: "+ incorrectGuesses);
    console.log(wordComplete);
 //        something to compare user input to letters in currentWord (conditional?
    // if match, then display (innerHtml, write.document?) in word, if not,

 };
//something to compare user input to letters in currentWord (conditional?
// if match, then display (innerHtml, write.document?) in word, if not,
// display in loss)
};
startGame();

