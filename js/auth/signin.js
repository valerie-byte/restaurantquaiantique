// page pour connexion
// on récupère les éléemnts du html sigin.htmml
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingin = document.getElementById("btnSignin");
// quand on clique sur le bouton,
btnSingin.addEventListener("click", checkCredentials);
// on exécute la fonctio
function checkCredentials(){
    // test de la page alert("bouton cliqué")
// Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        //Il faudra récupérer le vrai token
        alert("utilisateur connecté")
        // valeur du cookie inspecteur web application cookie
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
         setToken(token);
         //placer ce token en cookie

         //setCookie(RoleCookieName, "admin", 7);
        //  redirige vers page accueil
        //place ce token en cookie on ajoute un cookie appelé role et qui dure 7jours, valeur = admin
        setCookie("RoleCookieName", "client",7);
        window.location.replace("/");
    } else {
        mailInput.classList.add("is-invalid");
         passwordInput.classList.add("is-invalid");
     }
}
// alert("bonjour");