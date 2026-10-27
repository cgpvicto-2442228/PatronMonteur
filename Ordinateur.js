/**
 * @summary Classe qui représente un ordinateur
 */
export class Ordinateur {
    //quantite de memoire vive en Go
    _ram = 0;

    //nom de la carte graphique
    _carteGraphique = "";

    //quantite de memoire en Go
    _memoire = 0;

    /**
     * @summary Accesseur (lecture) à la quantité de mémoire vive.
     * 
     * @returns {number} La quantité de mémoire vive.
     */
    get ram() {
        return this._ram;
    }

    /**
     * @summary Accesseur (écriture) de la quantité de mémoire vive.
     * 
     * @param {number} valeur - La nouvelle quantité de mémoire vive.
     */
    set ram(valeur) {
        this._ram = valeur;
    }

    /**
     * @summary Accesseur (lecture) à la carte graphique.
     * 
     * @returns {string} Le nom de la carte graphique.
     */
    get carteGraphique() {
        return this._carteGraphique;
    }

    /**
     * @summary Accesseur (écriture) de la carte graphique.
     * 
     * @param {string} valeur - Le nom de la nouvelle carte graphique.
     */
    set carteGraphique(valeur) {
        this._carteGraphique = valeur;
    }

    /**
     * @summary Accesseur (lecture) à la quantité de mémoire.
     * 
     * @returns {number} La quantité de mémoire.
     */
    get memoire() {
        return this._memoire;
    }

    /**
     * @summary Accesseur (écriture) de la quantité de mémoire.
     * 
     * @param {number} valeur - La nouvelle quantité de mémoire.
     */
    set memoire(valeur) {
        this._memoire = valeur;
    }
}