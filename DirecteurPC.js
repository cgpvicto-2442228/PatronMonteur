import { MonteurPC } from "./MonteurPC.js";

export class DirecteurPC {
    _monteurPC = null;

    setOrdinateur(monteur) {
        if (!(monteur instanceof MonteurPC)) {
            throw new Error("Erreur : Le monteur fourni doit être de type MonteurPC.");
        }
        this._monteurPC = monteur
    }

    assembler() {
        if (this._monteurPC != null) {
            this._monteurPC.AjouterCarteGraphique();
            this._monteurPC.AjouterMemoire();
            this._monteurPC.AjouterRam();
        }
    }

    getOrdinateur() {
        return this._monteurPC.AvoirOrdinateur();
    }
}