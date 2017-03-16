
//something to hold words (array)

var wordChoices = ["wordOn"];

//some way to randomly select a word from the array (Math.floor(Math.random()*array.length))
var currentWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];

//a counter for wins (var countWins)
var countWins = 0;

//a counter for losses (var countLosses)
var countLosses = 0;

//derive from incorrect guesses
var guessesLeft = Math.ceil(currentWord.length/3)*2;

var correctGuesses = [];


var incorrectGuesses = [];

//take correctGuesses and currentWord, compare with loop 
	//use myString.split('')


//something to hold the "skeleton" (letter holders)
var skeletonWord="";

//compare skeletonWord to presence of placeholders
var isWordComplete= true;


//invoke this on NEW WORD
var setUnderline= function(){
	for(var i=0; i<currentWord.length; i++){
		skeletonWord+="_ ";	
	};

	};

// var letterChecker = function(){
// 		currentWord.split('').forEach(function(c){
// 		if(correctGuesses.indexOf(c)===-1){
// 	 		skeletonWord+="_";
// 	 		isWordComplete=false;
//  	}else{
// 		skeletonWord+= userGuess;
		//Check to see if word is complete by if there are any placeholders
			//**if(skeletonWord.charAt
        // }
 // });
// };


//get value
//evaluate guess( if correct, add to correct guesses if incorrect, add 



// //iterate through current word
// for(var i=0; i<currentWord.length; i++){
// 	//only add letter to correct guesses if the character is found AND a
// 	//unique character
// if(userGuess === currentWord.charAt(i) &&  correctGuess.indexOf(i)===-1){
// 	correctGuesses+=i;
// 	letterChecker(userGuess);
// 	console.log("the new word is " + skeletonWord + "correct guesses:" + correctGuesses);
// }else {
// 	incorrectGuesses+=i;
// 	console.log("the new word is " + skeletonWord + " incorrect Guesses: "+ incorrectGuesses);

// }


// }

//to incorrect guess----derive guesses left)
//create function that (evaluates guess, current word) then add to correct of incorrect guess arrays
//create new string newSkeletonWord=[]; forEach if userInput if currentWord.split('')


//something to capture keystrokes (key.event?)

//get value
      
document.onkeyup = function(event) {



        // Determines which key was pressed
        var userGuess = event.key;

        // Alerts the key the user pressed (userGuess).
        alert(userGuess);

	 //iterate through current word
	for(var i=0; i<currentWord.length; i++){
		//only add letter to correct guesses if the character is found AND a
		//unique character
	if(userGuess === currentWord.charAt(i)){
		correctGuesses.push(userGuess);
	}else{
		correctGuesses.push("_ ");
	}

	}; 

	console.log(correctGuesses);

     



 //        something to compare user input to letters in currentWord (conditional?	
	// if match, then display (innerHtml, write.document?) in word, if not,
	// display in loss)

	//for(var i=0;i<currentWord.length; i++){
		// if(userGuess==currentWord.charAt(i){

		// SOMETHING THAT REPLACES UNDERSCORES WITH INPUT

		// }else{
		// 	countLosses++
		// }

 };
	


//something to compare user input to letters in currentWord (conditional?
// if match, then display (innerHtml, write.document?) in word, if not,
// display in loss)


	console.log(currentWord);
	setUnderline();
	console.log(skeletonWord);
	

