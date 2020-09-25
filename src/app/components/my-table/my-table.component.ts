import { getLocaleDateFormat } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataLayerService } from '../../services/data-layer.service';
@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.less']
})
export class MyTableComponent implements AfterViewInit, OnInit {
 
  constructor(private dataService: DataLayerService){
    
  }

  ngOnInit() {
    //this.dataSource = this.dataService.getData()
  }

  ngAfterViewInit() {
   
  }
}
