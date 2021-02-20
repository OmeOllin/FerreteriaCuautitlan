/**
 * Copyright (C) 2021 Luis Linares - Todos los derechos reservados
 *
 * Este código está licenciado bajo la licencia MIT (ver LICENSE.txt para más detalles)
 *
 * Este archivo contiene el código para la descarga de la revista en formato PDF.
 *
 * @summary Código JS para la descarga del PDF.
 * @author Luis Linares <luis_linares75@hotmail.com>
 *
 * Created at     : 2021-02-19 20:29:37 
 * Last modified  : 2021-02-19 20:30:16
 */

function descargarPDF() {
    let blob = "";

    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if (this.status == 200) {
            blob = new Blob([xhr.response], { type: 'application/pdf' });

            let link = document.createElement('a');

            link.href = window.URL.createObjectURL(blob);
            link.download = "catalogo.pdf";

            link.click();

            hideLoading();
        } else {
            alert("Error. Estatus " + this.status + ".");
        }
    };

    try {
        let url = 'https://omeollin.github.io/FerreteriaCuautitlan/docs/catalogo.pdf';
        xhr.open('GET', url, true);

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.responseType = 'blob';
        
        showLoading();

        xhr.send();
    } catch (e) {
        alert(e);
    }
}
