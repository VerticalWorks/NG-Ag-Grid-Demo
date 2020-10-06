import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyMeComponent } from './lazy-me.component';

const routes: Routes = [{ path: '', component: LazyMeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyMeRoutingModule { }
