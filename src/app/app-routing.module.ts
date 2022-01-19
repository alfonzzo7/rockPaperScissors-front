import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './components/play/play.component';
import { TotalsComponent } from './components/totals/totals.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'play', component: PlayComponent },
  { path: 'totals', component: TotalsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
