var questions = [{
	question: "What show involved a yellow dish washing tool that lived at the bottom of the sea?",
	option1: "The Wild Thornberrys",
	option2: "All That!",
	option3: "Spongebob Squarepants",
	option4: "Clarissa Explains It All",
	answer: "Spongebob Squarepants",
	}, 
	{
	question: "In the show titled Rugrats, what were the names of the two twins?",
	option1: "Huey and Duey",
	option2: "Philip and Lilian",
	option3: "Dillan and Jilian",
	option4: "Sarah and Steven",
	answer: "Philip and Lilian",
	},
	{
	question: "What was the name of Rocko's best friend in Rocko's Modern Life?",
	option1: "Heffer",
	option2: "Ren",
	option3: "Barry",
	option4: "Terry",
	answer: "Heffer",
	},
	{
	question: "What is the name of the character that Doug had a crush on?",
	option1: "Tippi Dink",
	option2: "Beebee Bluff",
	option3: "Connie Benge",
	option4: "Patti Mayonnaise",
	answer: "Patti Mayonnaise",
	},
	{
	question: "In the show, Good Burger, what was the name of the restaurant that threatened Good Burger's existence?",
	option1: "Super Burger",
	option2: "Ultra Burger",
	option3: "Mega Burger",
	option4: "Mondo Burger",
	answer: "Mondo Burger",
	},
	{
	question: "What was Helga Pataki's favorite nickname for Arnold?",
	option1: "Airhead",
	option2: "Football Head",
	option3: "Pip Squeak",
	option4: "Geek Face",
	answer: "Football Head",
	},
	{
	question: "What is the name of the mountain that contestants had to climb in the show, Global Guts?",
	option1: "Crazy Cliff",
	option2: "Danger Doom",
	option3: "Aggro Crag",
	option4: "Globo Mountain",
	answer: "Aggro Crag",
	},
	{
	question: "What Nickelodeon show involved contestants competing in video game trivia and playing against the Video Game Wizard?",
	option1: "Nick Arcade",
	option2: "Game to Fame",
	option3: "Nick Game Channel",
	option4: "Virtual Challenger",
	answer: "Nick Arcade",
	},
	{
	question: "What is the name of the show where a girl gains powers due to being drenched by a chemical spill?",
	option1: "The Amanda Show",
	option2: "Zoey 101",
	option3: "The Adventures of Pete and Pete",
	option4: "The Secret World of Alex Mack",
	answer: "The Secret World of Alex Mac",
	},
	{
	question: "What is the name of the character that kept a Slam Book about all of her friends?",
	option1: "Harriet",
	option2: "Hannah",
	option3: "Heather",
	option4: "Haley",
	answer: "Harriet",
	}];

var index = 0;
var time = 	30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = document.getElementById('timer');
var question = document.getElementById('question');
var buttons = document.getElementById('buttons');
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var opt4 = document.getElementById('option4');
var answer = questions[index].answer;
var selected;


var startTimer = setInterval(decrementTime, 1000);
startGame(index);

document.getElementById('btn1').onclick = function(){
	selected = opt1.innerHTML;
	checkInput();
};
document.getElementById('btn2').onclick = function(){
	selected = opt2.innerHTML;
	checkInput();
};
document.getElementById('btn3').onclick = function(){
	selected = opt3.innerHTML;
	checkInput();
};
document.getElementById('btn4').onclick = function(){
	selected = opt4.innerHTML;
	checkInput();
};

 function decrementTime(){
	if(time > 0){
		time--;
		timer.innerHTML = time;
	}
	if (time === 0){
		clearInterval(startTimer);
		unanswered++;
		showResults();
		question.innerHTML = "Out of Time!"
		opt1.innerHTML = "The correct answer was: " + answer;
		buttons.style.display = "none";
	}
}

function startGame(){
	question.innerHTML = questions[index].question;
	opt1.innerHTML = questions[index].option1;
	opt2.innerHTML = questions[index].option2;
	opt3.innerHTML = questions[index].option3;
	opt4.innerHTML = questions[index].option4;
}

function nextQuestion(){
	time = 30;
	timer.innerHTML = time;
	setInterval(decrementTime, 1000);
	buttons.style.display = "block";
	index++;
	question.innerHTML = questions[index].question;
	opt1.innerHTML = questions[index].option1;
	opt2.innerHTML = questions[index].option2;
	opt3.innerHTML = questions[index].option3;
	opt4.innerHTML = questions[index].option4;
	answer = questions[index].answer;
}

function checkInput(){
	if(selected === answer){
		clearInterval(startTimer);
		correct++;
		showResults();
		question.innerHTML = "Correct!"
		buttons.style.display = "none";
	} else if (selected != answer) {
		clearInterval(startTimer);
		incorrect++;
		showResults();
		question.innerHTML = "Nope!"
		opt1.innerHTML = "The correct answer was: " + answer;
		buttons.style.display = "none";
	}

}

function showResults(){

	setTimeout(nextQuestion, 3500);

}


