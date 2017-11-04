import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'creat-corporation',
  templateUrl: './creat-corporation.component.html',
  styleUrls: ['./creat-corporation.component.scss']
})
export class CreatCorporationComponent implements OnInit {

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
