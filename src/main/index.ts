import { Velo } from './../concretes/velo';
import { Camion } from './../concretes/camion';
import { Vehicule } from './../interfaces/vehicule';
import { Voiture } from './../concretes/voiture';
const voiture: Vehicule = new Voiture("lada", "blanche");
const camion: Vehicule = new Camion("isuzu", "noir")
const velo: Vehicule = new Velo("schwinn", "blanc")


console.log(voiture.avancer());