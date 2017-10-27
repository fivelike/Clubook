import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DiscoverComponent } from './discover/discover.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { CircleComponent } from './circle/circle.component';
import { CorporationComponent } from './corporation/corporation.component';
import { HomeComponent } from './home/home.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'discover',
        pathMatch: 'full'
    },
    {
        path: "discover",
        component: DiscoverComponent
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'register',
        component: UserRegisterComponent
    },
    {
        path: 'circle',
        component: CircleComponent
    },
    {
        path: 'corporation',
        component: CorporationComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    // {
    //     path: '**',//fallback router must in the last
    //     loadChildren: './home/home.module#HomeModule'
    // }
];
