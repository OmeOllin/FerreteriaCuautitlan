var SIDENAV_FULL = 0;
var SIDENAV_PUSH = 1;
var BODY = document.getElementsByTagName('body').length > 0 ? document.getElementsByTagName('body')[0] : null;

/* Open the sidenav */
function openNav(sidenavName, sidenavType = SIDENAV_FULL) {
    switch (sidenavType) {
        case SIDENAV_PUSH:
            //SIDENAV_PUSH
            document.getElementById(sidenavName).style.width = "250px";
            if(BODY != null){ BODY.style.marginLeft = "250px"; }
            break;
        default:
            //SIDENAV_FULL
            document.getElementById(sidenavName).style.width = "100%";
            break;
    }
}

/* Close/hide the sidenav */
function closeNav(sidenavName, sidenavType = SIDENAV_FULL) {
    switch (sidenavType) {
        case SIDENAV_PUSH:
            //SIDENAV_PUSH
            document.getElementById(sidenavName).style.width = "0px";
            if(BODY != null){ BODY.style.marginLeft = "0px"; }
            break;
        default:
            //SIDENAV_FULL
            document.getElementById(sidenavName).style.width = "0";       
            break;
    }
}