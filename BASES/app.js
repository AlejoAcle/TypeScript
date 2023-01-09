"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let power;
    (function (power) {
        power[power["Flash"] = 5] = "Flash";
        power[power["Superman"] = 100] = "Superman";
        power[power["Batman"] = 1] = "Batman";
        power[power["Acuaman"] = 0] = "Acuaman";
    })(power || (power = {}));
    const fuerzaFlash = power.Flash;
    const fuerzaSuperman = power.Superman;
    const fuerzaBatman = power.Batman;
    const fuerzaAcuaman = power.Acuaman;
    console.log(power);
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
