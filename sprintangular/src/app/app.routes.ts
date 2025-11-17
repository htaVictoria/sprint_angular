import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const routes: Routes = [
    {
        path: "", 
            component: LoginComponent,
            pathMatch: 'full'
    },
    {
        path: "login",
        component: LoginComponent,
    },
   {
    path: "home",
    component: HomeComponent,
   },
   {
    path: "dashboard",
    component: DashboardComponent,
   },
];
