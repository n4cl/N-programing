(function(){
    'use strict';
    // ギア画像を回転させる
    var gear = document.getElementById('gear');
    var deg = 0;
    function rotateHeader() {
        deg = deg + 6;
        deg = deg % 360;
        gear.style.transform = 'rotateZ(' + deg +  'deg)';
    }
    setInterval(rotateHeader, 20);
})();