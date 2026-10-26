// Classe qui représente un ordinateur
class Ordinateur {
    //quantite de memoire vive en Go
    _ram = 0;

    //nom de la carte graphique
    _carteGraphique = "";

    //quantite de memoire en Go
    _memoire = 0;

    /// <summary>
    /// aceesseur a la quantite de memoire vive
    /// </summary>
    get ram() {
        return this._ram;
    }
    set ram(valeur) {
        this._ram = valeur;
    }

    /// <summary>
    /// aceesseur a la carte graphique
    /// </summary>
    get carteGraphique() {
        return this._carteGraphique;
    }
    set carteGraphique(valeur) {
        this._carteGraphique = valeur;
    }

    /// <summary>
    /// aceesseur a la quantite de memoire
    /// </summary>
    get memoire() {
        return this._memoire;
    }
    set memoire(valeur) {
        this._memoire = valeur;
    }
}