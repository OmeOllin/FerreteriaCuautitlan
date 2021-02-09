var SIDENAV_FULL = 0;
var SIDENAV_PUSH = 1;
var TYPECOLLAPSE = null;
var BODY = document.body || null;
let sidenavPushWidth = '360px';

/** Abre el sidenav cart y cierra los demás */
function openCartNav(){
    openNav('cartSidenav', TYPECOLLAPSE);
    closeNav('searchSidenav');
    closeNav('contentSidenav');
}
/** Abre el sidenav search y cierra los demás */
function openSearchNav(){
    closeNav('cartSidenav');
    openNav('searchSidenav', TYPECOLLAPSE);
    closeNav('contentSidenav');
}
/** Abre el sidenav content y cierra los demás */
function openContentNav(){
    closeNav('cartSidenav');
    closeNav('searchSidenav');
    openNav('contentSidenav', TYPECOLLAPSE);
}

/** Establece automáticamente el tipo de colapsable, dependiendo del tamaño de la pantalla */
function setTypecollapse(){
    //Se cierran todos los navs
    closeNav('cartSidenav');
    closeNav('searchSidenav');
    closeNav('contentSidenav');

    //Se determina el tamaño de la pantalla
    if (screen.width < 1024) {
        //Pequeña
        TYPECOLLAPSE = SIDENAV_FULL;
    }
    else {
        //Mediana y Grande
        TYPECOLLAPSE = SIDENAV_PUSH;
    }

    //Se inicializan los eventos de los botones de acción
    initializeEvents();
}
/** Inicializa el evento click de los sidenavs */
function initializeEvents(){
    //Se obtienen los elementos por id
    let crNavA = document.getElementById('crNavA');
    let crNavB = document.getElementById('crNavB');

    let srNavA = document.getElementById('srNavA');
    let srNavB = document.getElementById('srNavB');
    let srNavC = document.getElementById('srNavC');

    let coNavA = document.getElementById('coNavA');
    let coNavB = document.getElementById('coNavB');

    //Se establece el evento click de los elementos
    crNavA.onclick = function(){ openCartNav(); }
    crNavB.onclick = function(){ openCartNav(); }

    srNavA.onclick = function(){ openSearchNav(); }
    srNavB.onclick = function(){ openSearchNav(); }
    srNavC.onclick = function(){ openSearchNav(); }

    coNavA.onclick = function(){ openContentNav(); }
    coNavB.onclick = function(){ openContentNav(); }
}

/* Abre un sidenav por id y por tipo de sidenav, por default full */
function openNav(sidenavName, sidenavType = SIDENAV_FULL) {
    switch (sidenavType) {
        case SIDENAV_PUSH:
            //SIDENAV_PUSH
            document.getElementById(sidenavName).style.width = sidenavPushWidth;
            if(BODY != null){ 
                BODY.style.marginLeft = sidenavPushWidth; 
                BODY.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
            }
            break;
        default:
            //SIDENAV_FULL
            document.getElementById(sidenavName).style.width = "100%";
            break;
    }
}

/* Cierra un sidenav por id */
function closeNav(sidenavName, sidenavType = SIDENAV_FULL) {
    switch (sidenavType) {
        case SIDENAV_PUSH:
            //SIDENAV_PUSH
            document.getElementById(sidenavName).style.width = "0";
            if(BODY != null){ 
                BODY.style.marginLeft = "0"; 
                BODY.style.backgroundColor = 'white';
            }
            break;
        default:
            //SIDENAV_FULL
            document.getElementById(sidenavName).style.width = "0";       
            break;
    }
}