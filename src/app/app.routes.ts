import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Library } from './library/library';
import { Dashboard } from './dashboard/dashboard';
import { Statistics } from './statistics/statistics';
import { Notepad } from './notepad/notepad';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'dashboard', component: Dashboard },
  { path: 'library', component: Library },
  { path: 'statistics', component: Statistics },
  { path: 'notepad', component: Notepad },
];
