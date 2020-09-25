import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPageNotFoundComponent } from './components/app-page-not-found/app-page-not-found.component';
import { MyTableComponent } from './components/my-table/my-table.component';


const routes: Routes = [
  { path: 'my-table', component: MyTableComponent },
  { path: '**', component: AppPageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
