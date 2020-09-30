import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppPageNotFoundComponent } from './components/app-page-not-found/app-page-not-found.component'
import { StarWarsPeopleComponent } from './components/star-wars-people/star-wars-people.component'
import { BowmanComponent } from './components/bowman/bowman.component'


const routes: Routes = [
  { path: 'star-wars-people', component: StarWarsPeopleComponent },
  { path: 'bowman', component: BowmanComponent },
  { path: '', redirectTo: '/star-wars-people', pathMatch: 'full' },
  { path: '**', component: AppPageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
