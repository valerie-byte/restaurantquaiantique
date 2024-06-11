//méthode de gestion de cookies suite de chaines de caractères
// nom du cookie = accesstoken
const tokenCookieName = "accesstoken";
// place le token en cookie
function setToken(token){
    // nbre de jours 7 jours
    setCookie(tokenCookieName, token, 7);
}
// retourne le cookie du token
function getToken(){
    return getCookie(tokenCookieName);
}

// place le cookie
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
// récupère le cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
// écrase le cookie
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
// si on est connecté
function isConnected(){
    if(getToken() == null || getToken == undefined){
        return false;
    }
    else{
        return true;
    }
}

if (isConnected()) {
    alert("je suis connecté");
} else {
        alert("je ne suis pas connecté");
    }
