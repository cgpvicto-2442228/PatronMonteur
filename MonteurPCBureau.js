import { MonteurPC } from "./MonteurPC.js";
import { Ordinateur } from "./Ordinateur.js";

export class MonteurPCBureau extends MonteurPC {
    _ordinateur = new Ordinateur();

    /// <summary>
    /// Étape d'ajout de la carte graphique au pc en construction
    /// pour un pc de bureau
    /// </summary>
    AjouterCarteGraphique() {
        this._ordinateur.carteGraphique = "integree";
    }

    /// <summary>
    /// Étape d'ajout de la mémoire au pc en construction
    /// pour un pc de bureau
    /// </summary>
    AjouterMemoire() {
        this._ordinateur.memoire = 500;
    }

    /// <summary>
    /// Étape d'ajout de la mémoire vive au pc en construction
    /// pour un pc de bureau
    /// </summary>
    AjouterRam() {
        this._ordinateur.ram = 16;
    }

    /// <summary>
    /// Retourne l'ordinateur de jeu construit.
    /// </summary>
    /// <returns>Ordinateur construit</returns>
    AvoirOrdinateur() {
        return this._ordinateur
    }
}