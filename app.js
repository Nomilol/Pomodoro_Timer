(function(){

	var app = {
		timer : null,
		defautlTime : null,
		intervalID : null,
		init : function(){
			app.listeners();
		},
		listeners : function(){
			$('#pomodoroTimer').on('click', app.pomodoroTimer);
			$('#shortBreak').on('click', app.shortBreak);
			$('#longBreak').on('click', app.longBreak);
			$('#startButton').on('click', app.start);
			$('#stopButton').on('click', app.stop);
			$('#resetButton').on('click', app.reset);
		},
		pomodoroTimer : function(){
			app.defautlTime = parseInt($('.timer').val(),10);
			app.timer = defautlTime;
			app.intervalID = setInterval(app.decrement, 1000);
		},
		shortBreak : function(){

		},
		longBreak : function(){

		},
		start : function(){

		},
		stop : function(){

		},
		reset : function(){

		},
		updateView : function(){

		}

	}
			





































































	app.init();
})();