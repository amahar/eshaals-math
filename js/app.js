$(document).ready(function(){

function question(numb1,numb2){

	var numbers = {};
	numbers.number1 = numb1;
	numbers.number2 = numb2;
	numbers.add = numb1 + numb2;
	numbers.getNumbs = function(){
		$('.questions').empty();
		return "What is " +this.number1+ " + " +this.number2+ " ?";
	}
	return numbers;
}

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
	this.answer4 = corAns;
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
	  $('.rtnAnswers').append('<li><form id = "myForm"><input class="btn btn-default" type="submit" value= '+arr[i]+'></form></li>');
	  i++;
	}
}
}

function randNum1To5(){
	num1To5 = Math.floor((Math.random() * 5) + 1);
	return num1To5;
}


$('button').on('click', function(){
		var getQuestion = question(randNum1To5(),randNum1To5())
		corAns = getQuestion.add;
		var finalAnswer = new Answer(corAns);
		$('.questions').append(getQuestion.getNumbs());
		$('#answers').text(finalAnswer.runAnswer());
});

$(document).on("submit","#myForm",function(){
	alert($("#myForm").attr('value'));
});


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