/**
 * Copyright (C) 2021 Luis Linares - Todos los derechos reservados
 *
 * Este código está licenciado bajo la licencia MIT (ver LICENSE.txt para más detalles)
 *
 * Este archivo contiene la lógica de operación de las páginas de la revista. Crea y permite
 * añadir páginas al carrusel de manera dinámica.
 *
 * @summary Código JS para el control de las páginas de la revista.
 * @author Luis Linares <luis_linares75@hotmail.com>
 *
 * Created at     : 2021-02-19 20:28:04 
 * Last modified  : 2021-03-01 00:57:10
 */

var paginas = [];
var curPageIx = 0;

function crearMapaPaginas(){
    let url = 'https://omeollin.github.io/FerreteriaCuautitlan/docs/pagesMap.txt';
    //Obtiene el contenido del archivo de texto.
    xhrRequest(url, 'GET', function(strRawContents) { 
        try {
            //Elimina los retornos de carro del contenido del documento.
            while (strRawContents.indexOf('\r') >= 0)
                strRawContents = strRawContents.replace('\r', '');

            //Crea un arreglo de lineas del contenido del documento.
            let arrLines = strRawContents.split('\n');
            //Por cada una de las lineas del documento, se mapea una página
            for (let i = 0; i < arrLines.length; i++) {
                let curLine = arrLines[i];
                //Se obtienen los elementos de la página.
                let arrA = curLine.split('||');
                //Se agrega una página al arreglo.
                paginas.push({
                    index: arrA[0],
                    filename: arrA[1],
                    tags: arrA[2],
                    positions: arrA[3]
                });
            }

            //Si hay páginas, se carga la primera y se coloca como activa.
            if(paginas.length >= 1){ agregarPagina(paginas[0].filename, true); }
            //Si no hay páginas, se muestra una página default.
            if(paginas.length <= 0){ agregarPagina('paginaDefault.png', true); }

            let link = document.getElementById('linkCC');
            link.innerHTML = ' 1 / ' + paginas.length;
        } catch (e) {
            alert(e);
        }
    });
}

function agregarPagina(filename, active = false){
    let cI = document.getElementById('carouselInner');
    cI.innerHTML += '<div style="text-align: center;" class="carousel-item ' + (active ? 'active' : '') + '">'
                        + '<img src="https://omeollin.github.io/FerreteriaCuautitlan/img/pages/' + filename + '" style="height: 589px;" alt="..." />'
                    + '</div>';
}
