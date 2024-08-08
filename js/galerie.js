    // let monImage = getImage("titre", "../images/imgbloc1.jpg");
    let titre = '<img src=x onerror="window.location.replace(\'https://google.com\')"';
    let imgSource = "../images/imgbloc1.jpg";
    galerieImage.innerHTML = monImage;
 



function getImage(titre, urlImage) {
    const galerieImage = document.getElementById("allImages");


    return ` <div class="col p-3">
        <div class="image-card text-white">
        image-card text-white ">
            <img src="${urlImage}" class="rounded w-100">
            <p class="titre-image">${titre}</p>
            <div class="action-image-bouton" data-show ="admin" >
                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#editionPhotModal"><i class="bi bi-pencil-fill"></i></button>
                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#deletePhotoModal"><i class="bi bi-trash3 "></i></button>
            </div>
        </div>
    </div>`;
}