/**
 * Copyright (C) 2021 Luis Linares - Todos los derechos reservados
 *
 * Este código está licenciado bajo la licencia MIT (ver LICENSE.txt para más detalles)
 *
 * Este archivo contiene todos aquellos elementos (variables, funciones) que pueden ser usados
 * de manera global en el proyecto.
 *
 * @summary Código JS general para todo el proyecto
 * @author Luis Linares <luis_linares75@hotmail.com>
 *
 * Created at     : 2021-02-19 20:25:39 
 * Last modified  : 2021-02-19 20:26:27
 */

var xhrRequest = function (url, type, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        callback(this.responseText);
    };
    xhr.open(type, url);
    xhr.send();
};