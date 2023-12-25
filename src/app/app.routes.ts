import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const routes: Route[] = [
    {path:"",component:DashboardComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"login",component:LoginComponent}
];
