import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiResultPeople } from 'src/app/models/api-result-people';
import { Planet } from 'src/app/models/planet';
import { People } from 'src/app/models/people';
import { DataLayerService } from '../../services/data-layer.service';
import { GridOptions, Module } from 'ag-grid-community';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.less']
})
export class MyTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  //grid stuff
  gridOptions: GridOptions;
  apiResults = {}  as ApiResultPeople;
  gridApi;
  gridColumnApi;
  autoGroupColumnDef;
  columnDefs;
  defaultColDef;
  rowSelection;
  rowDragManaged;
  suppressLoadingOverlay= false
  rowData: [];
  checkboxSelection = function (params) {
    return params.columnApi.getRowGroupColumns().length === 0;
  };
  headerCheckboxSelection = function (params) {
    return params.columnApi.getRowGroupColumns().length === 0;
  };
  
  //paginator data
  config = {
    itemsPerPage: 5,
    pageSize: 10,
    pageIndex:1,
    totalItems: 1
  };

  constructor(private dataService: DataLayerService) {
    this.apiResults.count=0;
    this.apiResults.next='';
    this.apiResults.previous='';
    this.apiResults.results = Array<People>();
    this.rowSelection = 'multiple';
    this.columnDefs = [
      { rowDrag:false ,checkboxSelection: this.checkboxSelection, width:40, sortable:true, filter:true},
      { field: 'name', sortable:true, filter:true},
      { field: 'birth_year', sortable:true, filter:true },
      { field: 'homeworld',sortable:true, filter:true }
    ]
    this.defaultColDef = {
      width: 170,
      sortable: true,
      filter: true
    };

    this.autoGroupColumnDef = {
      headerName: 'Group',
      minWidth: 130,
      field: 'name',
      valueGetter: function (params) {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: false,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: { checkbox: true },
    };
  }
  
  ngOnInit() {
  }

  ngAfterViewInit() {
  }
  
  fetchAllPeople(page=1){
    this.dataService.fetchAllPeopleAndWorldData(page).then(data=>{
    this.apiResults=data
    this.config.pageIndex = page-1;
    this.config.pageSize = 10;
    this.config.totalItems =data.count;
   })
  }
  public handlePage(e: any) {
    //this.config.currentPage = e.pageIndex;
    //this.config.pageSize = e.pageSize;
    this.fetchAllPeople(e.pageIndex)
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.fetchAllPeople()
    this.suppressLoadingOverlay=true
  }
}
