//méthode de gestion de cookies suite de chaines de caractères
// nom du cookie = accesstoken
// deconnexion = suppression du cookie accesstoken
const tokenCookieName = "accesstoken";
const RoleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn");
const apiURL ="https://127.0.00.1:8000/api/";

signoutBtn.addEventListener("click", signout);
//on ércupère le role
function getRole(){
    return getCookie(RoleCookieName);
}

function signout() {
    // efface le cookie qui a pour nom accesstoken
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);
    // acutalise la page
    window.location.reload();
}

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
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
// récupère le cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(const element of ca) {
        let c = element;
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

// if (isConnected()) {
//     alert("je suis connecté");
// } else {
//         alert("je ne suis pas connecté");
//     }
// 4 utilisateurs déconnecté, connecté (admin ou client), admin et client

function showAndHideElementsForRoles(){
    // utilisateur est il connecté
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll('[data-show]');
// parcourt les éléments
    allElementsToEdit.forEach(element =>{
        // on récupère tous les data qch, on stocke données perso dans un noeud html
        // regarde la valeur du data show
        //d-none classe bootstrap
        switch(element.dataset.show){
            case 'disconnected': 
                if(userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'connected': 
                if(!userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'admin': 
                if(!userConnected || role != "admin"){
                    element.classList.add("d-none");
                }
                break;
            case 'client': 
                if(!userConnected || role != "client"){
                    element.classList.add("d-none");
                }
                break;
        }
    })
}

function sanitizeHtml(text){
    // Créez un élément HTML temporaire de type "div"
const tempHtml = document.createElement('div');
    
    // Affectez le texte reçu en tant que contenu texte de l'élément "tempHtml"
tempHtml.textContent = text;
    
    // Utilisez .innerHTML pour récupérer le contenu de "tempHtml"
    // Cela va "neutraliser" ou "échapper" tout code HTML potentiellement malveillant
return tempHtml.innerHTML;
}

function getInfosUser(){
    // console.log("récupération info utilisateur"); test de la fonction
    let myHeaders = new Headers();
    myHeaders.append("X-AUTH-TOKEN", getToken());

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(apiUrl+"account/me", requestOptions)
    .then(response =>{
        if(response.ok){
            return response.json();
        }
        else{
            console.log("Impossible de récupérer les informations utilisateur");
        }
    })
    .then(result => {
        return result;
    })
    .catch(error =>{
        console.error("erreur lors de la récupération des données utilisateur", error);
    });
}