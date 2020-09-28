import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppPageNotFoundComponent } from './components/app-page-not-found/app-page-not-found.component'
import { MyTableComponent } from './components/my-table/my-table.component'
import { BowmanComponent } from './components/bowman/bowman.component'


const routes: Routes = [
  { path: 'my-table', component: MyTableComponent },
  { path: 'bowman', component: BowmanComponent },
  { path: '', redirectTo: '/my-table', pathMatch: 'full' },
  { path: '**', component: AppPageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
