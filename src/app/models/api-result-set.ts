import { People } from './people';

export class ApiResultSet {
    "count": number; 
    "next": string;
    "previous": string; 
    "results": [People]
}
