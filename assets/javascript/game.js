

//this array holds the word options
var wordChoices = ["hombres", "taxes", "emails", "bigly", "illegals", "hillary", "liberal", "russia", "loser", "tremendous", "nasty" ];

// randomly selected word is pushed to this array
var currentWord=[];

// generates random word from wordChoices array
var generateWord=function(){
	currentWord=wordChoices[Math.floor(Math.random()*wordChoices.length)];
};

var wordComplete=false;

// declare counter outside gameStart function so it does not get reset
var countWins=0;

// wrap whole game in function to be called on page-load
var startGame= function(){

 //get element from html & connect to javascript	
var placeholdersWord = document.getElementById("placeholder-word"); 
var rightGuesses = document.getElementById("right-guesses");
var wrongGuesses = document.getElementById("wrong-guesses");
var remainingGuesses = document.getElementById("guesses-remaining-count");
var resetButton = document.getElementById("reset");
var winCounter =  document.getElementById("win-count");
resetButton.onclick= reloadPage;

// reloads page by refreshing page
var reloadPage= function (){
   window.location.reload();
};

// insert win count into HTML
winCounter.innerHTML=countWins;

// determines if you've won the whole game. If you have(10 wins), 
// the background changes and the game win count is sent back to zero.
var marryPutin=function(){
	if(countWins>1){
		document.body.classList.add("won-game");
		alert("you and Putin can finally run away together!")
		countWins=0;
		
	};
};

var youLose=function(){
	if(newGuessesLeft===0){
	document.body.classList.add("lost-game");
	document.getElementById("impeach").style.display="flex";
	}
}
	

//declare initial variables for start of game play
var guessesLeft=6;
var displayWord=[];
var correctGuesses=[];
var incorrectGuesses=[];
var wordComplete=false;

// function makes sure the letter input is in the alphabet, and determines
// if it is a correct or incorrect guess. also calculates guesses left.

var getGuesses = function(c){
		if(correctGuesses.indexOf(c)===-1 && displayWord.indexOf(c)!=-1){
			// add to correctGuesses
			correctGuesses+=c;
			// insert array into HTML
			rightGuesses.innerHTML = correctGuesses;

		}else if(incorrectGuesses.indexOf(c)===-1 && alphabet.includes(c)){
			// add to incorrectGuesses
			incorrectGuesses += c;

			
			// add to HTML
			wrongGuesses.innerHTML = incorrectGuesses;
			// determine amount of guesses left
			remainingGuesses.innerHTML=guessesLeft-incorrectGuesses.length;
			newGuessesLeft=guessesLeft-incorrectGuesses.length;
			youLose();	
			


	};
};		
	
// function checks to see if the word still has any placeholders.
// if it does not (is complete), changes wordComplete to true.

var isWordComplete= function(){
	displayWord.forEach(function(){
		if(displayWord.indexOf("_")===-1){
			wordComplete=true;


		}else{
			wordComplete=false;
		};
	});
};

// function resets the game, adds to win count, checks to see if you've won 10 times, 
// and restarts game play to generate new word.
var resetGame= function(){
	countWins++;
	marryPutin();
	startGame();

}
 // at start of game, we need a new word. Call the generateWord function.
 generateWord();
 console.log(currentWord);

// creates check to make sure input is a letter, and only a letter. split("") creates array for easier iteration.
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// at start of round, iterate through currentWord and create placeholder indexes
for (var i = 0; i < currentWord.length; i++) {
displayWord[i] = "_";

// display placeholder version in HTML
placeholdersWord.innerHTML = displayWord;
};


// listen for key event
document.onkeyup = function(event) {
	// determine which key was pressed
    var userGuess = event.key;


     //iterate through "currentWord" and compare to userGuess
    for(var i=0; i<currentWord.length; i++){
        
        // if userGuess matches a character in currentWord, replace index with character input from userGuess
	    if(userGuess === currentWord.charAt(i)){
	          displayWord[i] = userGuess;

	          // in HTML, show updated placeholder word
	          placeholdersWord.innerHTML = displayWord;

	          // check if the word is complete
	          isWordComplete();

	          // if word is complete, reset Game using resetGame()
	          if(wordComplete===true){
	          	resetGame();
	         
	          }
		};

  
    };
    getGuesses(userGuess);
 
    console.log(displayWord);
    console.log("correct: "+ correctGuesses);
    console.log("incorrect: "+ incorrectGuesses);
    console.log(wordComplete);


};

};
startGame();

