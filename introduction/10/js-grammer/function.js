(function(){
    'use strict';
    var admission = new Date(2017, 8, 11, 0, 0);

    function updateParagraph(){
        var now = new Date();
        var days = (now.getTime() - admission.getTime()) / 1000 / 60 / 60 / 24;
        // 日数だけ表示するように
        days = Math.floor(days);
        document.getElementById('admission-time').innerText = 'N予備校に入学してから' + days + '日経過。';
    }
    updateParagraph();
})();