var TIMER = TIMER || (function(){
    var _args = {};

    return {
        init : function(Args) {
            _args = Args;
        },
        Run : function() {
			var min = _args[0];
			var sec = _args[1];
			$(document).ready(function(){
				setInterval(function () { 
					var timer = 0;    
					if(sec > 0){
					sec--;
					}    
					console.log('sec='+sec);    
					if (sec == 0 && min != 0) {
					min--;
					sec = 59;
					}   
					console.log('min='+min);
					$("#"+_args[2]).text(('0' + min).slice(-2)+':'+('0' + sec).slice(-2));
					if (min == 0 && sec == 0) {
					$("#"+_args[3]).click();
					}  
				}, 1000)
			});
        }
    };
}());