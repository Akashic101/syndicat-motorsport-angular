import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LapRecordsPageComponent } from './lap-records-page.component';

const routes: Routes = [
  { path: '', component: LapRecordsPageComponent }
];

@NgModule({
  imports: [CommonModule, LapRecordsPageComponent, RouterModule.forChild(routes)]
})
export class LapRecordsPageModule {} 