import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { DiscoverComponent } from './discover/discover.component';
import { JoinComponent } from './join/join.component';
import { appRoutes } from './app.routes';

import { UserLoginService } from './user/user-login/user-login.service';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { CorporationComponent } from './corporation/corporation.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverComponent,
    JoinComponent,
    UserLoginComponent,
    UserRegisterComponent,
    CorporationComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
    UserLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
