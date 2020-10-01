import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { DataLayerService} from './services/data-layer.service'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavigationComponent } from './components/navigation/navigation.component'
import { LayoutModule } from '@angular/cdk/layout'
import { BowmanComponent } from './components/bowman/bowman.component'
import { MaterialModule } from './material-module'

import { AppPageNotFoundComponent } from './components/app-page-not-found/app-page-not-found.component'
import { AgGridModule } from 'ag-grid-angular'
import { GridOptions, AllCommunityModules} from '@ag-grid-community/all-modules'
import { HttpClientModule } from '@angular/common/http'
import { StarWarsPeopleComponent } from './components/star-wars-people/star-wars-people.component';
import { SpinnerComponent } from './components/spinner/spinner.component'
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BowmanComponent,
    AppPageNotFoundComponent,
    StarWarsPeopleComponent,
    SpinnerComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AgGridModule.withComponents([]),
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    })
  ],
  entryComponents: [SpinnerComponent],
  providers: [DataLayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
