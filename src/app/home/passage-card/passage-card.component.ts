import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'passage-card',
  templateUrl: './passage-card.component.html',
  styleUrls: ['./passage-card.component.scss']
})
export class PassageCardComponent implements OnInit {
  isVisible = false;

  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }

  
  constructor() { }

  ngOnInit() {
  }

}
