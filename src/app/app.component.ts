import { Component } from '@angular/core';
import { UserLoginService } from './user/user-login/user-login.service';
import { User } from './user/model/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentUser: User;

  constructor(
    public userLoginService: UserLoginService
  ){

  }
  ngOnInit(){
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.userLoginService.currentUser
        .subscribe(
          data=>{
            this.currentUser = data;
          },
          error=> console.error(error)
        );
  }



  public doLogout(): void {
    this.userLoginService.logout();
  }
  
}
