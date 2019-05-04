import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedChildRoutingModule } from './nested-child-routing.module';
import { NestedChildComponent } from './nested-child.component';

@NgModule({
  declarations: [
    NestedChildComponent
  ],
  imports: [
    CommonModule,
    NestedChildRoutingModule
  ]
})
export class NestedChildModule { }
