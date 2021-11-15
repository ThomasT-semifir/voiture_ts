import { Vehicule } from './../interfaces/vehicule';
export class Voiture implements Vehicule{
    _marque: string;
    _couleur: string;

    constructor(marque: string, couleur: string){
        this._marque = marque;
        this._couleur = couleur;
    }

    avancer(): string {
        return (2+2).toString()
    }

}