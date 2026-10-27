export class MonteurPC {
    constructor() {
        if (this.constructor === MonteurPC) {
            throw new Error("Impossible d'instancier une classe abstraite directement.")
        }
    }

    /**
     * @summary Signature de la methode qui ajoute la memoire vive a l'ordinateur en construction
     */
    AjouterRam() {
        throw new Error("La méthode 'AjouterRam()' doit être implémentée.")
    }

    /**
     * @summary Signature de la methode qui ajoute la carte graphique a l'ordinateur en construction
     */
    AjouterCarteGraphique() {
        throw new Error("La méthode 'AjouterCarteGraphique()' doit être implémentée.")
    }

    /**
     * @summary Signature de la methode qui ajoute la memoire a l'ordinateur en construction
     */
    AjouterMemoire() {
        throw new Error("La méthode 'AjouterMemoire()' doit être implémentée.")
    }

    /**
     * @summary Signature de la methode qui retourne l'ordinateur qui a été construit
     */
    AvoirOrdinateur() {
        throw new Error("La méthode 'AvoirOrdinateur()' doit être implémentée.")
    }
}