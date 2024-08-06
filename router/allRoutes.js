// importe le fichier route.js dans le même dossier
import Route from "./route.js";

//Définir ici vos routes liste des pages /nomdelapage, titre et chemein d'accès
// href = /nompage donc on ouvre le lien correspondant, rech dans le tableau
// []on peut y accéder ou pas
/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs déconnecté 
["client"] -> Réserver aux utilisateurs avec le rôle client 
["admin"] -> Réserver aux utilisateurs avec le rôle admin 
["admin", "client"] -> Réserver aux utilisateurs avec le rôle client OU admin
*/
export const allRoutes = [
    new Route("/", "Accueil", "./pages/home.html", []),
    new Route("/galerie", "La Galerie", "./pages/galerie.html", [], "/js/galerie.js"),
    new Route("/signin", "connexion", "./pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "inscription", "./pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "mon compte", "./pages/auth/account.html", ["client", "admin"]),
    new Route("/editpassword", "changement mot de passe", "./pages/editpassword.html", ["client", "admin"]),
    new Route("/allResa", "réservations", "./pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "réserver", "./pages/reservations/reserver.html", ["client"]),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";