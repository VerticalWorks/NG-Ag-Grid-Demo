import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent} from './components/comp-one/comp-one.component'
import { CompTwoComponent} from './components/comp-two/comp-two.component'
import { LazyMeComponent } from './lazy-me.component';

const routes: Routes = [
  { path: '', component: LazyMeComponent },
  { path: '/lazy-me/comp-one', component: CompOneComponent },
  { path: '/lazy-me/comp-two', component: CompTwoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyMeRoutingModule { }
