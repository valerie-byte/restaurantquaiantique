// importe le fichier route.js dans le même dossier
import Route from "./route.js";

//Définir ici vos routes liste des pages
export const allRoutes = [
    new Route("/", "Accueil", "./pages/home.html"),
    new Route("/galerie", "La Galerie", "./pages/galerie.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";