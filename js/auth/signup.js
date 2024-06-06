// implémenter le js de ma page
// on récupère les id des éléments à vérifier sur page signup.html
const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");

// type d'évènement keyup sur touche relachée
inputNom.addEventListener("keyup",validateForm);
inputPrenom.addEventListener("keyup",validateForm);
inputMail.addEventListener("keyup",validateForm);
inputPassword.addEventListener("keyup",validateForm);
inputValidatePassword.addEventListener("keyup",validateForm);

// vérifie nom et prénom
function validateForm() {
    validateRequired(inputNom);
    validateRequired(inputPrenom);
}

// fonction quand on met du texte dans le champ nom celui-ci devient vert, si plus de charactère celui ci devient rouge
function validateRequired (input) {
    if(input.value != '') {
        // c'est pas ok
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    } else {
        // c'est  ok
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
}