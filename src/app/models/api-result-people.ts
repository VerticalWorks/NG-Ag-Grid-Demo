import { People } from './people';

export class ApiResultPeople {
    "count": number; 
    "next": string;
    "previous": string; 
    "results": Array<People>
}
