import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { DataLayerService} from './services/data-layer.service'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavigationComponent } from './components/navigation/navigation.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { BowmanComponent } from './components/bowman/bowman.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { AppPageNotFoundComponent } from './components/app-page-not-found/app-page-not-found.component'
import { AgGridModule } from 'ag-grid-angular'
import { GridOptions, AllCommunityModules} from '@ag-grid-community/all-modules'
import { HttpClientModule } from '@angular/common/http'
import { StarWarsPeopleComponent } from './components/star-wars-people/star-wars-people.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BowmanComponent,
    AppPageNotFoundComponent,
    StarWarsPeopleComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AgGridModule.withComponents([])
  ],
  providers: [DataLayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
