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
    element.parentElement.parentElement.innerHTML = '<a id="linkCC" onclick="habilitarCampoCaptura(this);" class="nav-link px-3" href="#">0 - 0 / ' + paginas.length + '</a>';
}
