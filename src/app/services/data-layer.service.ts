import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Planet, People, ApiResultPeople } from '../models'
import { inject } from '@angular/core/testing'
import { concatMap, map, switchMap, tap } from 'rxjs/operators'
import { Observable, of, pipe, forkJoin, from } from 'rxjs'

  


@Injectable({
  providedIn: 'root'
})
export class DataLayerService {

  public apiPeopleURL: string = 'https://swapi.dev/api/people/'
  
  
  constructor(private httpClient: HttpClient) { 
  }
  
  public async fetchAllPeopleAndWorldData(pageUrl = null): Promise<ApiResultPeople> {
    if (pageUrl===null){
      pageUrl = this.apiPeopleURL
    }
    let result1 = await this.getPeople(pageUrl)
      for (let item of result1.results) {
        let result2 = await this.getPlanet(item.homeworld) 
        item.homeworld = result2.name
      }
      return result1
  }
  private async getPeople(pageUrl): Promise<ApiResultPeople>{
    return this.httpClient.get<ApiResultPeople>(pageUrl).toPromise()
  }
  private async getPlanet(id:string): Promise<Planet>{
    return this.httpClient.get<Planet>(id).toPromise()
}
}