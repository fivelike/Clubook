import { Component, OnInit } from '@angular/core';
import { MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public myOptions: MasonryOptions = {
    transitionDuration: '0.5s',
    // itemSelector: '.grid-item',
    // columnWidth: '.grid-sizer',
    percentPosition: true,
  };

  bricks = [
    { title: 'Brick 1' },
    { title: 'Brick 2' },
    { title: 'Brick 3' },
    { title: 'Brick 4' },
    { title: 'Brick 5' },
    { title: 'Brick 6' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
