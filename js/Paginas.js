var paginas = [];

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

            //Se cargan las tres primeras páginas. Se coloca la primera como activa.
            if(paginas.length >= 1){ agregarPagina(paginas[0].filename, true); }
            if(paginas.length >= 2){ agregarPagina(paginas[1].filename); }
            if(paginas.length >= 3){ agregarPagina(paginas[2].filename); }

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
