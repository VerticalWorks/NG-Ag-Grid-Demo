import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppPageNotFoundComponent } from './components/app-page-not-found/app-page-not-found.component'
import { StarWarsPeopleComponent } from './components/star-wars-people/star-wars-people.component'
import { StarWarsMatTableComponent } from './components/star-wars-mat-table/star-wars-mat-table.component'
import { BowmanComponent } from './components/bowman/bowman.component'
import { ListTodoComponent } from './components/todo/list-todo/list-todo.component'
import { ColorTilesComponent } from './components/color-tiles/color-tiles.component'

const routes: Routes = [
  { path: 'star-wars-ag-grid', component: StarWarsPeopleComponent },
  { path: 'star-wars-mat-table', component: StarWarsMatTableComponent },
  { path: 'bowman', component: BowmanComponent },
  { path: 'todo', component: ListTodoComponent },
  { path: 'color-tiles', component: ColorTilesComponent },
  { path: '', redirectTo: '/star-wars-ag-grid', pathMatch: 'full' },
  { path: '**', component: AppPageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
