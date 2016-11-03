(function(){
	var app ={
		Interval : null,
		defaultTime : 1500,
		pomodoroTime : 1500,
		shortBreakTime : 300,
		longBreakTime : 600,
		running : false,

		init : function(){
			app.listeners();
		},
		listeners : function(){
			$('#pomodoroTimer').on('click', app.pomodoro);
			$('#shortBreak').on('click',app.shortBreak );
			$('#longBreak').on('click', app.longBreak);
			$('#startButton').on('click', app.start)
			$('#stopButton').on('click', app.stop);
			$('#resetButton').on('click', app.reset);
		},
		pomodoro : function(){
			clearInterval(app.Interval)
			app.Interval = setInterval(function(){
				app.pomodoroTime--;
				min = parseInt(app.pomodoroTime/60,10);
				sec = app.pomodoroTime - min*60;
				if(app.pomodoroTime === 0 && min !=0){
					min--;
				}
				if(sec === 0 && min === 0){
					clearInterval(Interval);
				}
				app.print();
			},1000);
		},
		shortBreak : function(){
			clearInterval(app.Interval);
			app.Interval = setInterval(function(){
				app.shortBreakTime--;
				min = parseInt(app.shortBreakTime/60,10);
				sec = app.shortBreakTime - min*60;
				if (app.shortBreakTime === 0 && min !=0){
					min--;
				}
				if(sec === 0 && min === 0){
					clearInterval(app.Interval);
				}
				app.print();
			},1000);
		},
		longBreak : function(){
			clearInterval(app.Interval);
			app.Interval = setInterval(function(){
				app.longBreakTime--;
				min = parseInt(app.longBreakTime/60, 10);
				sec = app.longBreakTime - min*60;
				if (app.longBreakTime === 0 && min !=0){
					min--;
				}
				if(sec === 0 && min ===0){
					clearInterval(app.Interval);
				}
				app.print();
			},1000);

		},
		start : function(){
			clearInterval(app.Interval);
			app.Interval = setInterval(function(){
				min = parseInt(app.longBreakTime/60, 10);
				sec = app.longBreakTime - min*60;
			},1000);
		},
		stop : function(){

			if (!app.running){
				clearInterval(app.Interval);
					
			}
		},
		reset : function(){
		},
		print : function(){
			$('#minutes').text(min);
			$('#secondes').text(sec);
		}
	}
	app.init();
})();
































