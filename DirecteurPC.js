class DirecteurPC {
    _monteurPC = null;

    setOrdinateur(monteur) {
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