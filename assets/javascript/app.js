$(document).ready(function () {

    var $startButton = $('#start-button');

    $startButton.click(function () {

        //button disappear effect
        $startButton.unbind('click');
        $startButton.animate({
            'left': '40%',
            'opacity': '0'
        }, 500, function () {

            //remove startbutton
            $startButton.remove();

            //create timer
            var $timerDiv = $('#timer-div');
            $timerDiv.append('<div class="m-auto" id="timer"></div>');

            //set timer value
            var $timer = $('#timer');
            var timerCounter = 30;
            $timer.text(timerCounter);

            //timer animation
            $timer.animate({
                'opacity': '1',
                'right': '0'
            }, 500, function () {

                //begin timer countdown
                var countdown = setInterval(countdownFunc, 1000);
                function countdownFunc() {
                    if (timerCounter === 0) {
                        clearInterval(countdown);
                    } else {
                        timerCounter--;
                        $timer.html(timerCounter);
                    }
                }
            })
        });

    })
})