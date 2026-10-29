import { MonteurPC } from "./MonteurPC.js";
import { Ordinateur } from "./Ordinateur.js";

export class MonteurPCGaming extends MonteurPC {
    _ordinateur = new Ordinateur();

    /**
     * @summary Étape d'ajout de la carte graphique au pc en construction pour un pc gaming.
     */
    AjouterCarteGraphique() {
        this._ordinateur.carteGraphique = "RTX 4070";
    }

    /**
     * @summary Étape d'ajout de la mémoire au pc en construction pour un pc gaming.
     */
    AjouterMemoire() {
        this._ordinateur.memoire = 2000;
    }

    /**
     * @summary Étape d'ajout de la mémoire vive au pc en construction pour un pc gaming.
     */
    AjouterRam() {
        this._ordinateur.ram = 64;
    }

    /**
     * @summary Retourne l'ordinateur de jeu construit.
     * 
     * @returns {Ordinateur} L'ordinateur construit.
     */
    AvoirOrdinateur() {
        return this._ordinateur
    }
}