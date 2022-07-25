import { Routes } from '@angular/router';

import { ShowingNowComponent } from '../pages';

export const routes: Routes = [
  { path: 'home', component: ShowingNowComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
