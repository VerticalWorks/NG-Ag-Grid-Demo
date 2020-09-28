import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core'
import { tap } from 'rxjs/operators'
import { ApiResultPeople } from 'src/app/models/api-result-people'
import { Planet } from 'src/app/models/planet'
import { People } from 'src/app/models/people'
import { DataLayerService } from '../../services/data-layer.service'
import { GridOptions, Module } from 'ag-grid-community'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator'

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.less']
})
export class MyTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator
  
  //grid stuff
  gridOptions: GridOptions
  apiResults = {}  as ApiResultPeople
  gridApi
  gridColumnApi
  autoGroupColumnDef
  columnDefs
  defaultColDef
  rowSelection
  rowDragManaged
  suppressLoadingOverlay= false
  rowData: []
  checkboxSelection = function (params) {
    return params.columnApi.getRowGroupColumns().length === 0
  }
  headerCheckboxSelection = function (params) {
    return params.columnApi.getRowGroupColumns().length === 0
  }
  
  //paginator data
  pager = {
    itemsPerPage: 10,
    pageSize: 10,
    pageIndex:0,
    totalItems: 0,
  }

  constructor(private dataService: DataLayerService) {
    this.apiResults.count=0
    this.apiResults.next=''
    this.apiResults.previous=''
    this.apiResults.results = Array<People>()
    this.rowSelection = 'multiple'
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
    }

    this.autoGroupColumnDef = {
      headerName: 'Group',
      minWidth: 130,
      field: 'name',
      valueGetter: function (params) {
        if (params.node.group) {
          return params.node.key
        } else {
          return params.data[params.colDef.field]
        }
      },
      headerCheckboxSelection: false,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: { checkbox: true },
    }
  }
  
  ngOnInit() {
  }

  ngAfterViewInit() {
  }
  
  fetchAllPeople(pageUrl=null){
    this.dataService.fetchAllPeopleAndWorldData(pageUrl).then(data=>{
    this.apiResults=data
   })
  }
  public handlePage(e: any) {
    
    // something went wrong, reset.
    if(this.apiResults.next===null && this.apiResults.previous===null){
      this.fetchAllPeople()
      this.pager.pageIndex=1
      this.pager.totalItems = this.apiResults.count
    }
    
    // move to next page
    if((e.pageIndex > e.previousPageIndex) && (this.apiResults.next!=null)){
      this.fetchAllPeople(this.apiResults.next)
    }
   
    // move to previous page
    if((e.pageIndex < e.previousPageIndex) && (this.apiResults.previous!=null)){
      this.fetchAllPeople(this.apiResults.previous)
    }

  }
  
  onGridReady(params) {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
    this.fetchAllPeople()
    this.suppressLoadingOverlay=true
  }
}
