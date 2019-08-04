import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ChildRouteData } from './child/child-route-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'angular-child-routing-demo';
  childRouteData = new ChildRouteData();

  constructor(
    private router:Router
  ){}

  childClicked(){
    this.childRouteData.message='hey child from home';
    this.router.navigate(['/child',this.childRouteData]);
  }

  ngOnDestroy(){
    this.childRouteData=null;
  }
}
