import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public error: Error;

  constructor(
    public router: Router,
    public userLoginService: UserLoginService
  ) {  }

  ngOnInit() {

  }



  public doLogin():void{
    console.log(this.user);
    this.userLoginService.login(this.user);

  }

}
