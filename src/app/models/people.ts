import {Planet} from './planet'
export interface People {
        "name": string; 
        "height": string; 
        "mass": string; 
        "hair_color": string; 
        "skin_color": string; 
        "eye_color": string; 
        "birth_year": string; 
        "gender": string; 
        "homeworld": string;
        "homeWorldData": Planet; 
        "films": [string]; 
        "species":  [string];
        "vehicles": [string]; 
        "starships": [string]; 
        "created": string;
        "edited": string; 
        "url": string;
    }
