import { Vehicule } from './../interfaces/vehicule';
export class Camion implements Vehicule{
    private _marque: string;
    private _couleur: string;

    constructor(marque: string, couleur: string){
        this._marque = marque;
        this._couleur = couleur;
    }

    public get marque(){
        return this._marque;
    }

    public set marque(marque: string){
        this._marque = marque;
    }

    public get couleur(){
        return this._couleur;
    }

    public set couleur(couleur: string){
        this._couleur = couleur;
    }

    avancer(): string {
        return "J'avance en tractant une remorque";
    }

}