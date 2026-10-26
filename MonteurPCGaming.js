class MonteurPCGaming {
    _ordinateur = new Ordinateur();

    /// <summary>
    /// Étape d'ajout de la carte graphique au pc en construction
    /// pour un pc gaming
    /// </summary>
    AjouterCarteGraphique() {
        this._ordinateur.carteGraphique = "RTX 4070";
    }

    /// <summary>
    /// Étape d'ajout de la mémoire au pc en construction
    /// pour un pc gaming
    /// </summary>
    AjouterMemoire() {
        this._ordinateur.memoire = 2000;
    }

    /// <summary>
    /// Étape d'ajout de la mémoire vive au pc en construction
    /// pour un pc gaming
    /// </summary>
    AjouterRam() {
        this._ordinateur.ram = 64;
    }

    /// <summary>
    /// Retourne l'ordinateur de jeu construit.
    /// </summary>
    /// <returns>Ordinateur construit</returns>
    AvoirOrdinateur() {
        return this._ordinateur
    }
}