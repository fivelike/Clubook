import { Component, OnInit,Input } from '@angular/core';
import { Circle } from '../model/circle-model';
@Component({
  selector: 'circle-card',
  templateUrl: './circle-card.component.html',
  styleUrls: ['./circle-card.component.scss']
})
export class CircleCardComponent implements OnInit {
  @Input() circle: Circle;
  constructor() {
    // console.log(this.circle);
   }

  ngOnInit() {
  }

}
