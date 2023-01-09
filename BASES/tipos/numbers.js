"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('We have problems');
    }
    else {
        console.log('dont worry');
    }
    avengers = Number('55A');
})();
