"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return 'Activada';
    };
    console.log(typeof activateBatSignal);
    const heroName = returnName();
})();
