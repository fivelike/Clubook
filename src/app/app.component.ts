import { Component } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

import { UserLoginService } from './user/user-login/user-login.service';
import { UserRegisterService } from './user/user-register/user-register.service';
import { User } from './user/model/user-model';
import 'rxjs/add/operator/merge';

import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentUser: User;

  constructor(
    public userLoginService: UserLoginService,
    public userRegisterService: UserRegisterService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private _notification: NzNotificationService
  ){

  }
  ngOnInit(){
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // console.log(this.currentUser);
    this.userLoginService.currentUser
      .merge(this.userRegisterService.currentUser)
        .subscribe(
          data=>{
            console.log(data);
            this.currentUser = data;
            let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
            let routerState: RouterState = this.router.routerState;
            let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

            //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
            if (routerStateSnapshot.url.indexOf("/login") != -1) {
              this.router.navigateByUrl("/home");
            }
          },
          error=> console.error(error)
        );
  }



  public doLogout(): void {
    this.userLoginService.logout();
    this.createNotification('success','退出成功','欢迎你下次使用');
    this.router.navigateByUrl("");
  }

  createNotification = (type,text,p) => {
    this._notification.create(type, `${text}`, `${p}`);
  };
  
}
