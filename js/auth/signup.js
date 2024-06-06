// implémenter le js de ma page
// on récupère les id des éléments à vérifier sur page signup.html
const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnvalidation = document.getElementById("btn-validation-inscription");

// type d'évènement keyup sur touche relachée
inputNom.addEventListener("keyup",validateForm);
inputPrenom.addEventListener("keyup",validateForm);
inputMail.addEventListener("keyup",validateForm);
inputPassword.addEventListener("keyup",validateForm);
inputValidatePassword.addEventListener("keyup",validateForm);

// vérifie nom et prénom
function validateForm() {
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateMail(inputMail);

    if(nomOk && prenomOk && mailOk ) {
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