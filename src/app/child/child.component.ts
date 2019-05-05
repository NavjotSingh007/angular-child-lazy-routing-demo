import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChildRouteData } from './child-route-data';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childRouteData:ChildRouteData;

  constructor(private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.childRouteData = await this.getRouteData();
  }

  getRouteData():Promise<ChildRouteData>{
    return new Promise(
      (resolve, reject)=>{
        resolve(<ChildRouteData>this.activatedRoute.snapshot.params);
      }
    );
  }

}
