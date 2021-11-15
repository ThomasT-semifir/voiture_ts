export class Velo{
    _marque: string;
    _couleur: string;
    _poids: string;

    constructor(marque: string, couleur: string, poids: string) {
        this._marque = marque;
        this._couleur = couleur;
        this._poids = poids;
    }

    avancer(): string{
        return "J'avance";
    }

    sansLesMains(): string {
        return "regarde maman!"
    }
}