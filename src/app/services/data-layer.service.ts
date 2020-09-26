import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResultPeople } from '../models/api-result-people';
import { ApiResultPlanet } from '../models/api-result-planet';
import { People } from '../models/people';
import { inject } from '@angular/core/testing';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataLayerService {

  private apiPeopleURL: string = 'https://swapi.dev/api/people/';
  private apiPlanetURL: string = 'https://swapi.dev/api/planets/';
  
  constructor(private httpClient: HttpClient) { }
  
  public fetchAllPeople(): Observable<ApiResultPeople>{
    this.httpClient.get<ApiResultPeople>(this.apiPeopleURL).subscribe(response =>{
        response.results = response.results.map(data=>{
          
        })
    })
}
  private getPeople(): Observable<ApiResultPeople>{
      return this.httpClient.get<ApiResultPeople>(this.apiPeopleURL)
  }
  private getPlanet(id): Observable<ApiResultPlanet>{
    return this.httpClient.get<ApiResultPlanet>(this.apiPlanetURL + id)
}
}