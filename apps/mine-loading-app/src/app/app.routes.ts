import { Route } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { MainComponent } from './layout/main.component';

export const appRoutes: Route[] = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: 'user-management',
                loadComponent: () => import('./feature/management/management.component')
            },
            {
                path: 'mine-route',
                loadComponent: () => import('./feature/mine-route/mine-route.component')
            },           
            {
                path: '**',
                loadComponent: () => import('./layout/not-found/not-found.component')
            }
        ]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
