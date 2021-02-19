let loadingHTML = '<div id="modal"' 
                    + ' class="modal fade bd-example-modal-lg"'
                    + ' data-backdrop="static"'
                    + ' data-keyboard="false"'
                    + ' tabindex="-1">'
                    + '<div class="modal-dialog modal-sm">'
                        + '<div class="modal-content" style="width: 48px">'
                            + '<span class="fa fa-spinner fa-spin fa-3x"></span>'
                        + '</div>'
                    + '</div>'
                + '</div>'
                + '<div class="modal-backdrop fade show" id="backdrop" style="display: none;"></div>';

function initializeLoading() { 
    document.body.innerHTML += loadingHTML;
}

function showLoading(){
    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal').classList.add('show');
}

function hideLoading(){
    document.getElementById('backdrop').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal').classList.remove('show');
}