import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'creat-circle',
  templateUrl: './creat-circle.component.html',
  styleUrls: ['./creat-circle.component.scss']
})
export class CreatCircleComponent implements OnInit {

  isVisible = false;
  isConfirmLoading = false;

  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
