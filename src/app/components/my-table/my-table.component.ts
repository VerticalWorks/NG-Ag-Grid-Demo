import { getLocaleDateFormat } from '@angular/common';
import { AfterViewInit, Component, OnInit} from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiResultPeople } from 'src/app/models/api-result-people';
import { ApiResultPlanet } from 'src/app/models/api-result-planet';
import { People } from 'src/app/models/people';
import { DataLayerService } from '../../services/data-layer.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.less']
})
export class MyTableComponent implements AfterViewInit, OnInit {
 
  apiResults: ApiResultPeople;
  
  columnDefs = [
    { field: 'name', sortable: true, filter: true },
    { field: 'birth_year', sortable: true, filter: true },
    { field: 'homeworld', sortable: true, filter: true }
  ];

  constructor(private dataService: DataLayerService){
    this.dataService.getPeople().subscribe(response =>
    {
      this.apiResults = response
    })
  }

  
  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

  public getPeople(url: string) {
    this.dataService.getPeople().subscribe(data=>{
       return data;
    })
  }
}
