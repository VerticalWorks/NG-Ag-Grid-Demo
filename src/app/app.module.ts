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
import { NgxsWebsocketPluginModule } from '@ngxs/websocket-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from 'src/environments/environment';
import { CreateTodoComponent } from './components/todo/create-todo/create-todo.component';
import { ListTodoComponent } from './components/todo/list-todo/list-todo.component';
import { StarWarsMatTableComponent } from './components/star-wars-mat-table/star-wars-mat-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BowmanComponent,
    AppPageNotFoundComponent,
    StarWarsPeopleComponent,
    SpinnerComponent,
    CreateTodoComponent,
    ListTodoComponent,
    StarWarsMatTableComponent
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
    }),
    NgxsWebsocketPluginModule.forRoot({
      url: 'ws://localhost:4200'
    }),
    NgxsFormPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  entryComponents: [SpinnerComponent],
  providers: [DataLayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
