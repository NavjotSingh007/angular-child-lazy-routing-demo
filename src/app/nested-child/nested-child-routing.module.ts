import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedChildComponent } from './nested-child.component';

const routes: Routes = [
  {path:'', component:NestedChildComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestedChildRoutingModule { }
