function crearIndiceContenido(){
    let url = 'https://omeollin.github.io/FerreteriaCuautitlan/docs/contentIndex.txt';   
    //Obtiene el contenido del archivo de texto.
    xhrRequest(url, 'GET', function(strRawContents) { 
        try {
            //Elimina los retornos de carro del contenido del documento.
            while (strRawContents.indexOf('\r') >= 0)
                strRawContents = strRawContents.replace('\r', '');

            //Crea un arreglo de lineas del contenido del documento.
            let arrLines = strRawContents.split('\n');
            //Por cada una de las lineas del documento.
            for (let i = 0; i < arrLines.length; i++) {
                let curLine = arrLines[i];
                let arrLine = curLine.split('||');
                //Agrega un elemento al índice de contenido.
                let oSidenav = document.getElementById('contentSidenav');
                oSidenav.innerHTML += '<a href="' + arrLine[1] + '">' + arrLine[0] + '</a>';
            }
        } catch (e) {
            alert(e);
        }
    });
}