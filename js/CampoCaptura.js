/**
 * Copyright (C) 2021 Luis Linares - Todos los derechos reservados
 *
 * Este código está licenciado bajo la licencia MIT (ver LICENSE.txt para más detalles)
 *
 * Este archivo contiene la lógica del comportamiento del campo de captura de páginas. 
 * Permite al usuario capturar la página a la que desea navegar.
 *
 * @summary Código JS para el campo de captura de página.
 * @author Luis Linares <luis_linares75@hotmail.com>
 *
 * Created at     : 2021-02-19 20:22:32 
 * Last modified  : 2021-03-01 00:57:16
 */


function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

function habilitarCampoCaptura(element){
    let maxPages = 200;
    element.parentElement.innerHTML = '<div style="background-color: white;" class="py-1 px-0 nav-link"><input id="campoCaptura" style="text-align:center; max-width: 85px;" onkeypress="campoCapturaKeypress(this, event);" onfocusout="deshabilitarCampoCaptura(this);" type="text" /></div>';
    let cc = document.getElementById('campoCaptura');
    setInputFilter(cc, function(value) {
        return /^\d{0,3}$/.test(value) && (value === "" || parseInt(value) <= maxPages); 
    });
    cc.focus();
}

function campoCapturaKeypress(element, e){
    if(e.keyCode == 13){
        deshabilitarCampoCaptura(element);
        return true;
    }
}

function deshabilitarCampoCaptura(element){
    let pStr = '';
    if(curPageIx == 0){ pStr = 1 + ' / ' + paginas.length; }
    if(curPageIx >= 1){ pStr = (curPageIx + 1) + ' - ' + (curPageIx + 2) + ' / ' + paginas.length; }
    element.parentElement.parentElement.innerHTML = '<a id="linkCC" onclick="habilitarCampoCaptura(this);" class="nav-link px-3" href="#">' + pStr + '</a>';
}
