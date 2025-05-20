import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers.component';

const routes: Routes = [
  { path: '', component: DriversComponent }
];

@NgModule({
  imports: [CommonModule, DriversComponent, RouterModule.forChild(routes)]
})
export class DriversModule {} 