import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: "", 
            component: LoginComponent,

    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "home",
                component: HomeComponent,
            },
            {
                path: "dashboard",
                component: DashboardComponent,
            },
        
        ]
    }
   
];
