var Interval;
var defaultTime = 1500;
var pomodoroTime = 1500;
var shortBreakTime = 300;
var longBreakTime = 600;
var running = false;



function pomodoro(){
	clearInterval(Interval);
	Interval = setInterval(function(){
		pomodoroTime--;
		var min = parseInt(pomodoroTime/60,10);
		var sec = pomodoroTime - min*60;
		if(pomodoroTime === 0 && min !=0){
			min--;
		}
		if(sec === 0 && min === 0){
			clearInterval(Interval);
		}
		$("#minutes").text(min);
		$('#secondes').text(sec);
	},1000);
	
};


function shortBreak(){
	clearInterval(Interval);
	Interval = setInterval(function(){
		shortBreakTime--;
		var min = parseInt(shortBreakTime/60,10);
		var sec = shortBreakTime - min*60;
		if (shortBreakTime === 0 && min !=0){
			min--;
		}
		if(sec === 0 && min === 0){
			clearInterval(Interval);
		}
		$('#minutes').text(min);
		$('#secondes').text(sec);
	},1000);
};


function longBreak(){
	clearInterval(Interval);
	Interval = setInterval(function(){
		longBreakTime--;
		var min = parseInt(longBreakTime/60, 10);
		var sec = longBreakTime - min*60;
		if (longBreakTime === 0 && min !=0){
			min--;
		}
		if(sec === 0 && min ===0){
			clearInterval(Interval);
		}
		$('#minutes').text(min);
		$('#secondes').text(sec);
	},1000);
};

function stop(){
	if (!running){
		clearInterval(Interval);
	}

	running = !running;

};






$('#pomodoroTimer').on('click', function(){
	pomodoro();
});

$('#shortBreak').on('click', function(){
	shortBreak();
});

$('#longBreak').on('click', function(){
	longBreak();
});

$('#stopButton').on('click', function(){
	stop();
});


$('#startButton').on('click', function(){
	if(running){
		Interval = setInterval(1000);
	}
	running = !running;
});




