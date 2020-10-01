
import { People } from './people';

export interface ApiResultPeople {
    "count": number; 
    "next": string;
    "previous": string; 
    "results": People[]
}
