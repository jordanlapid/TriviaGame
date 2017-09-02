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
var time = 	10;
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
var correctAnswer = document.getElementById('correctAnswer');
var cor = document.getElementById('correct');
var incor = document.getElementById('incorrect');
var unans = document.getElementById('unanswered');
var images = document.getElementById('images');
var answer = questions[index].answer;
var selected;
var clock;

var imagesArray = ["assets/images/spongebob.jpg","assets/images/phillil.png","assets/images/heffer.png","assets/images/patti.png","assets/images/mondo.jpg","assets/images/helga.jpg","assets/images/aggrocrag.jpg","assets/images/nickarcade.jpg","assets/images/alexmack.jpg","assets/images/harriet.jpg"]

quiz.style.display = "none";
results.style.display ="none";
images.style.display = "none";

document.getElementById('startButton').onclick = function(){
	start.style.display ="none";
	quiz.style.display = "block";
	startGame();
};

document.getElementById('startOver').onclick = function(){
	results.style.display ="none";
	quiz.style.display = "block";
	correctAnswer.innerHTML = "";
	buttons.style.display = "block";
	images.style.display = "none";
	time = 10;
	correct = 0;
	incorrect =0;	
	unanswered = 0;
	index = 0;
	startGame();
};

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


function startGame(){
	playGame(index);
	startTimer();
}

function stopTimer (){
	clearInterval(timer);
}

 function startTimer(){
 	clock = setInterval(tenSeconds, 1000)
	 	function tenSeconds(){
			if (time === 0) {
				selected = 0;
				checkInput();
			} else if(time > 0){
				time--;
				timer.innerHTML = time;
			} 
		}
	}

function playGame(){
	question.innerHTML = questions[index].question;
	opt1.innerHTML = questions[index].option1;
	opt2.innerHTML = questions[index].option2;
	opt3.innerHTML = questions[index].option3;
	opt4.innerHTML = questions[index].option4;
}

function nextQuestion(){
	time = 10;
	startTimer();
	timer.innerHTML = time;
	images.style.display = "none";
	buttons.style.display = "block";
	index++;
	question.innerHTML = questions[index].question;
	opt1.innerHTML = questions[index].option1;
	opt2.innerHTML = questions[index].option2;
	opt3.innerHTML = questions[index].option3;
	opt4.innerHTML = questions[index].option4;
	answer = questions[index].answer;
	correctAnswer.innerHTML = "";
}

function checkInput(){
	if(selected === answer){
		correct++;
		waitScreen();
		buttons.style.display = "none";
		question.innerHTML = "Correct!"
		selected = 0;
		images.style.display = "inline";
		$("#images").attr("src", imagesArray[index]);
	} else if (selected != answer && selected != 0) {
		incorrect++; 
		waitScreen();
		question.innerHTML = "Nope!"		
		correctAnswer.innerHTML = "The correct answer was: " + answer;
		buttons.style.display = "none";
		selected = 0;
		images.style.display = "inline";
		$("#images").attr("src", imagesArray[index]);
	} else if (selected === 0 && time === 0) {
		unanswered++;
		waitScreen();
		question.innerHTML = "Out of Time!"
		buttons.style.display = "none";
		correctAnswer.innerHTML = "The correct answer was: " + answer;
		selected = 0;
		images.style.display = "inline";
		$("#images").attr("src", imagesArray[index]);
	}
}

function waitScreen(){
	if(index === questions.length - 1) {
		clearInterval(clock);
		setTimeout(displayResults, 2500);
	} else {
		clearInterval(clock);
		setTimeout(nextQuestion, 2500);
	}

}

function displayResults(){
	quiz.style.display = "none";
	start.style.display ="none";
	results.style.display = "block";
	cor.innerHTML = correct;
	incor.innerHTML = incorrect;
	unans.innerHTML = unanswered;
}
