import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventsAndLeaguesComponent } from './events-and-leagues.component';

const routes: Routes = [
  { path: '', component: EventsAndLeaguesComponent }
];

@NgModule({
  imports: [CommonModule, EventsAndLeaguesComponent, RouterModule.forChild(routes)]
})
export class EventsAndLeaguesModule {} 