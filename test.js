import { DirecteurPC } from "./DirecteurPC.js";
import { MonteurPCGaming } from "./MonteurPCGaming.js";
import { MonteurPCBureau } from "./MonteurPCBureau.js";
import { Ordinateur } from "./Ordinateur.js";

// 1. Instanciation du directeur
const directeur = new DirecteurPC();

// 2. Instanciation des monteurs concrets
const monteurPcGaming = new MonteurPCGaming();
const monteurPcBureau = new MonteurPCBureau();

// 3. Construction du PC Gaming
directeur.setOrdinateur(monteurPcGaming);
directeur.assembler();
const ordiGaming = directeur.getOrdinateur();

afficher(ordiGaming);

console.log("---------------------------------------");

// 4. Construction du PC de bureau
directeur.setOrdinateur(monteurPcBureau);
directeur.assembler();
const ordiBureau = directeur.getOrdinateur();

afficher(ordiBureau);

/**
 * Fonction utilitaire pour afficher les caractéristiques d'un ordinateur.
 * 
 * @param {Ordinateur} ordi - L'ordinateur à afficher.
 */
function afficher(ordi) {
    console.log("Ordinateur :");
    console.log("Ram : " + ordi.ram + " go");
    console.log("Memoire : " + ordi.memoire + " go");
    console.log("Carte graphique : " + ordi.carteGraphique);
}