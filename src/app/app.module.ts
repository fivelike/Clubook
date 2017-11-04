import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { DiscoverComponent } from './discover/discover.component';
import { appRoutes } from './app.routes';

import { UserLoginService } from './user/user-login/user-login.service';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { CorporationComponent } from './corporation/corporation.component';
import { CircleComponent } from './circle/circle.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { WritePassageComponent } from './home/write-passage/write-passage.component';
import { PassageCardComponent } from './home/passage-card/passage-card.component';
import { CircleCardComponent } from './discover/circle-card/circle-card.component';
import { CircleListComponent } from './discover/circle-list/circle-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverComponent,
    UserLoginComponent,
    UserRegisterComponent,
    CorporationComponent,
    CircleComponent,
    HomeComponent,
    NotificationsComponent,
    WritePassageComponent,
    PassageCardComponent,
    CircleCardComponent,
    CircleListComponent
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
