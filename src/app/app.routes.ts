import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { EventsAndLeaguesComponent } from './pages/events-and-leagues/events-and-leagues.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { SupportUsComponent } from './pages/support-us/support-us.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'events-and-leagues', component: EventsAndLeaguesComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'support-us', component: SupportUsComponent },
];