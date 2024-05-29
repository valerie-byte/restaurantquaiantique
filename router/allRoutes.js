// importe le fichier route.js dans le même dossier
import Route from "./route.js";

//Définir ici vos routes liste des pages /nomdelapage, titre et chemein d'accès
// href = /nompage donc on ouvre le lien correspondant, rech dans le tableau
export const allRoutes = [
    new Route("/", "Accueil", "./pages/home.html"),
    new Route("/galerie", "La Galerie", "./pages/galerie.html"),
    new Route("/signin", "connexion", "./pages/auth/signin.html"),
    new Route("/signup", "inscription", "./pages/auth/signup.html"),
    new Route("/account", "mon compte", "./pages/auth/account.html"),
    new Route("/editpassword", "changement mot de passe", "./pages/editpassword.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";