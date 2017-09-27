(function(){
    'use strict';
    var age = 16;
    var isFemale = true;
    var value = null;
    if (age <= 15) {
        value = '800円';
    } else if (isFemale) {
        value = '1000円';
    } else {
        value = '1800円';
    }
    document.write(value);
})();