import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent} from './components/comp-one/comp-one.component'
import { CompTwoComponent} from './components/comp-two/comp-two.component'
import { LazyMeComponent } from './lazy-me.component';

const routes: Routes = [
  {
    path:  '',
    component:  LazyMeComponent,
    children: [
    { path: 'comp-one', component: CompOneComponent },
    { path: 'comp-two', component: CompTwoComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyMeRoutingModule { }
