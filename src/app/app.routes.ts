import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
