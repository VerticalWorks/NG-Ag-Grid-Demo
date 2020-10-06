import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyMeRoutingModule } from './lazy-me-routing.module';
import { LazyMeComponent } from './lazy-me.component';
import { CompOneComponent } from './components/comp-one/comp-one.component';
import { CompTwoComponent } from './components/comp-two/comp-two.component';


@NgModule({
  declarations: [LazyMeComponent, CompOneComponent, CompTwoComponent],
  imports: [
    CommonModule,
    LazyMeRoutingModule
  ]
})
export class LazyMeModule { }
