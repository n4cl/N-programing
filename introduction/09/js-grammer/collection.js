(function(){
    'use strict';
    var emoji = ['🍣'
               , '👀'
               , '🎉'
               ];
    const x = '❌'
        , br = '<br>';

    for (var i = 0; i < emoji.length; i++){
        for (var j = 0; j < emoji.length; j++){
            document.write(emoji[i] + x + emoji[j]);
            document.write(br);
        }
    }
})();