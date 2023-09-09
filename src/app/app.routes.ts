import { Routes } from '@angular/router';
import { APP_ROUTES } from '@constants/app.constants';
import { authGuard } from '@data-access/guards/auth.guard';

export const routes: Routes = [
  {
    path: APP_ROUTES.AUTH_CALLBACK,
    loadComponent: () => import('./ui/auth-callback/auth-callback.component'),
  },
  {
    path: APP_ROUTES.HOME,
    loadComponent: () => import('./ui/home/home.component'),
    canActivate: [authGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
  },
];
