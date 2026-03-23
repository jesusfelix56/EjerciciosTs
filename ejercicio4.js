"use strict";
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
var getAvenger = function (nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        mensaje = nombre + " tiene el poder de: " + poder + "  y un arma: " + arma + " ";
    }
    else {
        mensaje = nombre + " tiene un " + poder;
        mensaje = nombre + " tiene un: " + poder;
    }
    return mensaje;
};
console.log(getAvenger("Wonder Woman", "", ""));
