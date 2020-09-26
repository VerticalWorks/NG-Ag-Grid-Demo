import { AfterViewInit, Component, OnInit} from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiResultPeople } from 'src/app/models/api-result-people';
import { Planet } from 'src/app/models/planet';
import { People } from 'src/app/models/people';
import { DataLayerService } from '../../services/data-layer.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.less']
})
export class MyTableComponent implements AfterViewInit, OnInit {
  columnDefs = [
    { field: 'name', sortable: true, filter: true },
    { field: 'birth_year', sortable: true, filter: true },
    { field: 'homeworld', sortable:true, filter:true}
  ]
  
  apiResults = {}  as ApiResultPeople;

  
  constructor(private dataService: DataLayerService) {
    this.apiResults.count=0;
    this.apiResults.next='';
    this.apiResults.previous='';
    this.apiResults.results = Array<People>();
    this.fetchAllPeople()
  }

  
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.fetchAllPeople()
  }

  fetchAllPeople(){
   this.dataService.fetchAllPeopleAndWorldData().then(data=>{
      this.apiResults=data
   })
  }
}
