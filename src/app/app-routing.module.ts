import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'child', loadChildren: './child/child.module#ChildModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
