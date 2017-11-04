import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'write-passage',
  templateUrl: './write-passage.component.html',
  styleUrls: ['./write-passage.component.scss']
})
export class WritePassageComponent implements OnInit {

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
