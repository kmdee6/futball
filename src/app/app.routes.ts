import { Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {SearcherComponent} from './searcher/searcher.component';

export const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'searcher', component: SearcherComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
