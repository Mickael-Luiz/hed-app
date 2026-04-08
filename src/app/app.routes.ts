import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { authGuard } from './core/guards/auth.guard';
import { RoleEnum } from './shared/enums/role.enum';

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
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        canActivate: [authGuard],
      },
      {
        path: 'courses',
        loadComponent: () => import('./pages/courses/courses').then(m => m.Courses),
        canActivate: [authGuard],
        data: {
          roles: [RoleEnum.ADMIN, RoleEnum.ALUNO, RoleEnum.COORDENADOR]
        }
      }
    ]
  }
];
