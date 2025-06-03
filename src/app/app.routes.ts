import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'events-and-leagues', loadChildren: () => import('./pages/events-and-leagues/events-and-leagues.module').then(m => m.EventsAndLeaguesModule) },
  { path: 'drivers', loadChildren: () => import('./pages/drivers/drivers.module').then(m => m.DriversModule) },
  { path: 'support-us', loadChildren: () => import('./pages/support-us/support-us.module').then(m => m.SupportUsModule) },
  { path: 'lap-records', loadChildren: () => import('./pages/lap-records/lap-records-page.module').then(m => m.LapRecordsPageModule) },
  { path: 'driver/:id', loadComponent: () => import('./driver-details/driver-details.component').then(c => c.DriverDetailsComponent) },
];