var SIDENAV_FULL = 0;
var SIDENAV_PUSH = 1;
var TYPECOLLAPSE = null;
let sidenavPushWidth = '360px';

/** Abre el sidenav cart y cierra los demás */
function openCartNav(){
    //Primero se cierran los otros dos navs.
    closeNav('searchSidenav', TYPECOLLAPSE);
    closeNav('contentSidenav', TYPECOLLAPSE);
    openNav('cartSidenav', TYPECOLLAPSE);
}
/** Abre el sidenav search y cierra los demás */
function openSearchNav(){
    //Primero se cierran los otros dos navs.
    closeNav('cartSidenav', TYPECOLLAPSE);
    closeNav('contentSidenav', TYPECOLLAPSE);
    openNav('searchSidenav', TYPECOLLAPSE);
}
/** Abre el sidenav content y cierra los demás */
function openContentNav(){
    //Primero se cierran los otros dos navs.
    closeNav('cartSidenav', TYPECOLLAPSE);
    closeNav('searchSidenav', TYPECOLLAPSE);
    openNav('contentSidenav', TYPECOLLAPSE);
}

/** Establece automáticamente el tipo de colapsable, dependiendo del tamaño de la pantalla */
function setTypecollapse(){
    //Se cierran todos los navs
    closeNav('cartSidenav', TYPECOLLAPSE);
    closeNav('searchSidenav', TYPECOLLAPSE);
    closeNav('contentSidenav', TYPECOLLAPSE);

    //Se determina el tamaño de la pantalla
    if (screen.width < 1366) {
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

    let srNavB = document.getElementById('srNavB');
    let srNavC = document.getElementById('srNavC');

    let coNavA = document.getElementById('coNavA');
    let coNavB = document.getElementById('coNavB');

    //Se establece el evento click de los elementos
    crNavA.onclick = function(){ openCartNav(); }
    crNavB.onclick = function(){ openCartNav(); }

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
            document.body.style.marginRight = sidenavPushWidth; 
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
            document.body.style.marginRight = "0"; 
            break;
        default:
            //SIDENAV_FULL
            document.getElementById(sidenavName).style.width = "0";       
            break;
    }
}