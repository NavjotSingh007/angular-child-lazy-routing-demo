import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child.component';

const routes: Routes = [
  {path:'', component:ChildComponent, children:[
    {path:'nested-child', loadChildren:'../nested-child/nested-child.module#NestedChildModule'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
