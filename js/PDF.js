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
