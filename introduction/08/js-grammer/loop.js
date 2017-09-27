(function(){
    'use strict';
    const brTag = '<br>'
    for (var i = 1; i < 101; i++){
        if (i % 15 === 0) {
            document.write('FizzBuzz' + brTag);
        } else if (i % 3 === 0) {
            document.write('Fizz' + brTag);
        } else if (i % 5 === 0) {
            document.write('Buzz' + brTag);
        } else {
            document.write(i + brTag);
        }
    }
})();