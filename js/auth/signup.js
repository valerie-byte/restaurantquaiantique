// implémenter le js de ma page
// on récupère les id des éléments à vérifier sur page signup.html
const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnvalidation = document.getElementById("btn-validation-inscription");
const formInscription = document.getElementById("formulaireInscription")

// type d'évènement keyup sur touche relachée
inputNom.addEventListener("keyup",validateForm);
inputPrenom.addEventListener("keyup",validateForm);
inputMail.addEventListener("keyup",validateForm);
inputPassword.addEventListener("keyup",validateForm);
inputValidatePassword.addEventListener("keyup",validateForm);
btnvalidation.addEventListener('click', inscrireUtilisateur);

// vérifie nom et prénom, valide tout le formualaire
function validateForm() {
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateMail(inputMail);
    const pwdOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidatePassword)

    if(nomOk && prenomOk && mailOk && pwdOk && passwordConfirmOk) {
        btnvalidation.disabled = false;
    } else {
        btnvalidation.disabled = true;
    }

}

// fonction pour vérifier si le formalisme du mail est respecté
function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    // match regex bien présent dans le champ à vérifier
    if(mailUser.match(emailRegex)){
        // is valid et is-invalid classe de bootstrap
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
// vérifier si inputpwd égal à validate pwd
function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    } else {
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}
// fonction pour voir mot de passe est ok au moins 8 caractères, une min, une maj un chiffr et un carc spécial
function validatePassword(input) {
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// fonction quand on met du texte dans le champ nom celui-ci devient vert, si plus de charactère celui ci devient rouge
function validateRequired (input) {
    if(input.value != '') {
        // c'est pas ok
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        // c'est  ok
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

function inscrireUtilisateur() {
    let dataForm = new FormData(formInscription);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "firstName": dataForm.get("nom"),
        "lastName": dataForm.get("prenom"),
        "email": dataForm.get("email"),
        "password": dataForm.get("motdepasse")
});

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
};

fetch(apiURL+"registration", requestOptions)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else {
            alert("Erreur lors de l'inscription");
        }
    })
    .then(result => {
        // vers la page de connexion
        alert("Bravo "+dataForm.get("prenom")+", vous êtes maintenant inscrit, vous pouvez vous connecter.");
        document.location.href="/signin";
    })
    .catch(error => console.log('error', error));
   
}