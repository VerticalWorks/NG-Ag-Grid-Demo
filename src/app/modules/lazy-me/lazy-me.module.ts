import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyMeRoutingModule } from './lazy-me-routing.module';
import { LazyMeComponent } from './lazy-me.component';


@NgModule({
  declarations: [LazyMeComponent],
  imports: [
    CommonModule,
    LazyMeRoutingModule
  ]
})
export class LazyMeModule { }
