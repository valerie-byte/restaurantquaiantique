// importe le fichier route.js dans le même dossier
import Route from "./route.js";

//Définir ici vos routes liste des pages /nomdelapage, titre et chemein d'accès
// href = /nompage donc on ouvre le lien correspondant, rech dans le tableau
export const allRoutes = [
    new Route("/", "Accueil", "./pages/home.html"),
    new Route("/galerie", "La Galerie", "./pages/galerie.html"),
    new Route("/signin", "connexion", "./pages/auth/signin.html", "/js/auth/signin.js"),
    new Route("/signup", "inscription", "./pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/account", "mon compte", "./pages/auth/account.html"),
    new Route("/editpassword", "changement mot de passe", "./pages/editpassword.html"),
    new Route("/allResa", "réservations", "./pages/reservations/allResa.html"),
    new Route("/reserver", "réserver", "./pages/reservations/reserver.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";