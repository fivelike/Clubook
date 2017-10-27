import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DiscoverComponent } from './discover/discover.component';
import { JoinComponent } from './join/join.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { CircleComponent } from './circle/circle.component';
import { CorporationComponent } from './corporation/corporation.component';

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
        path: "join",
        component: JoinComponent
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
    // {
    //     path: '**',//fallback router must in the last
    //     loadChildren: './home/home.module#HomeModule'
    // }
];
