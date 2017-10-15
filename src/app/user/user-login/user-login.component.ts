import { Component, OnInit } from '@angular/core';

import { UserLoginService } from './user-login.service';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user-model';
@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public user: User = new User();

  constructor(
    public userLoginService: UserLoginService
  ) {  }

  ngOnInit() {
  }

  onSubmit(form: any){
    console.log(form);
  }

  public doLogin():void{

    this.userLoginService.login(this.user);
  }

}
