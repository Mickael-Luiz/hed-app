import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login').then(m => m.Login)
  },
  
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
      }
    ]
  }
];
