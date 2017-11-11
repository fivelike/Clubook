import { Component, OnInit } from '@angular/core';
import {Circle} from '../model/circle-model';
@Component({
  selector: 'circle-list',
  templateUrl: './circle-list.component.html',
  styleUrls: ['./circle-list.component.scss']
})
export class CircleListComponent implements OnInit {

  circleList: Circle[];

  constructor() {
    this.circleList = [
      new Circle(1, "失物招领", 2324, "../../mock-data/mock-images/test.jpg"),
      new Circle(1, "失物招领", 2324, "../../mock-data/mock-images/test.jpg"),
      new Circle(1, "失物招领", 2324, "../../mock-data/mock-images/test.jpg"),
      new Circle(1, "失物招领", 2324, "../../mock-data/mock-images/test.jpg"),
      new Circle(1, "失物招领", 2324, "../../mock-data/mock-images/test.jpg"),
      new Circle(2, "拼车", 2324, "../../mock-data/mock-images/test.jpg")
    ];
   }

  ngOnInit() {
    
  }

}
