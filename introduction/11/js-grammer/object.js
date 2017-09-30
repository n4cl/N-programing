(function(){
    'use strict';
    var game = {
        startTime : null,
        displayArea : document.getElementById('display-area'),
        start : _start,
        stop : _stop,
        confirm : _confirm
    }

    function _start() {
        game.startTime = new Date();
        document.body.onkeypress = game.stop;
        console.log('スタートしました。');
    }
    function _stop() {
        var currentTime = new Date();
        var seconds = (currentTime - game.startTime) / 1000;
        if (seconds > 9.5 && seconds < 10.5) {
            game.displayArea.innerText = seconds + "秒でした。すごーい！";
        } else {
            game.displayArea.innerText = seconds + "秒でした。時間あてが苦手なフレンズなんだね。";
        }
        document.body.onkeypress = null;
    }
    function _confirm() {
        if (confirm('OKを押して10秒だと思ったら何かキーを押して下さい')) {
            game.start();
        }
    }

    game.confirm();

})();