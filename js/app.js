$(document).ready(function(){

// initilize variables
score = 0;
counter = 1;	

// on click give me 2 questions:
$('.btn.btn-primary').on('click', function(){
	newFunction();
});

// run two different classes to get random questions and its answers in each instance
function newFunction(){
	if (counter == 4) {
		alert("your final score is"+score+" ! Click Start play again");
		$('.modal').modal('hide');
		reset();
		return false;
	} else {
		$('#counter').text(counter);
		$('.modal').modal('show');
		var getQuestion = question(randNum1To5(),randNum1To5())
		corAns = getQuestion.add;
		var finalAnswer = new Answer(corAns);	
		$('.questions').append(getQuestion.getNumbs());
		$('#answers').text(finalAnswer.runAnswer());
	}
}

// retrieve answers from button values
$(document).on("click",".btn.btn-default",function(){
	counter += 1;
	var userInput = ($(this).attr('value'));
		if(userInput == corAns){
			score += 1;
			$('.btn.btn-success').text(score);
		} else {
			alert("incorrect anwer");
		}	
	newFunction();
});

// Start new addition
$('.btn.btn-danger').on("click", function(){
	reset();
});

function reset(){
	score = 0;
	$('.btn.btn-success').text(0);
	counter = 1;
	$('#counter').text(1);
	$('.modal').modal('hide');
}

// Keep per game to 3 rounds and give user its total score
function checkIfFinish(){
	if (counter == 3) {
	alert("your final score is"+score+" ! Click Start play again");
	$('.modal').modal('hide');
	return false;
	}
}

// factory function object to get to randoms numbers
function question(numb1,numb2){
	var numbers = {};
	numbers.number1 = numb1;
	numbers.number2 = numb2;
	numbers.add = numb1 + numb2;
	numbers.getNumbs = function(){
		$('.questions').empty();
		return this.number1+ " + " +this.number2+ " = ?";
	}
	return numbers;
}

// constructor object to get 3 random incorrect answers and 1 correct answer, each under value 10
function Answer(corAns){

	this.answer1 = Math.floor((Math.random() * 3) + 1);
	this.answer2 = Math.floor(Math.random() * (7-4 +1)+4);
	this.answer3 = Math.floor(Math.random() * (10-8 +1)+8);
	if (corAns === this.answer1) {
		do{
			this.answer1 = Math.floor((Math.random() * 5) + 1);
		}while(corAns === this.answer1)

	} else if (corAns === this.answer2) {
		do{
			this.answer2 = Math.floor((Math.random() * 5) + 1);
		}while(corAns === this.answer2)

	} else if (corAns === this.answer3) {
		do{
			this.answer3 = Math.floor((Math.random() * 5) + 1);
		}while(corAns === this.answer3)
	} 
// correct answer variable
	this.answer4 = corAns;

// create array of answers to send to DOM
	Answer.prototype.runAnswer = function(){
		$('.rtnAnswers').empty();
		var ans1 = this.answer1;
		var ans2 = this.answer2;
		var ans3 = this.answer3;
		var ans4 = this.answer4;

		var arr = [ans1, ans2, ans3, ans4]
		shuffle(arr);;
		console.log(arr)
		var i = 0;						
			while(i < arr.length){
		  	$('.rtnAnswers').append('<li><input class="btn btn-default" type="submit" value= '+arr[i]+'></li>');
		  	i++;
		}
	}
}

// create 2 random number from 1 to 5
function randNum1To5(){
	num1To5 = Math.floor((Math.random() * 5) + 1);
	return num1To5;
}

// shuffly answers of array - P.S. function below is not my code-:)
function shuffle(array) {
 	var currentIndex = array.length, temporaryValue, randomIndex ;

// While there remain elements to shuffle...
	while (0 !== currentIndex) {

// Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

// And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  	}

  		return array;
	}
});