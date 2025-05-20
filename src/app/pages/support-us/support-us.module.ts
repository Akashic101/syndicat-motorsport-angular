import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupportUsComponent } from './support-us.component';

const routes: Routes = [
  { path: '', component: SupportUsComponent }
];

@NgModule({
  imports: [CommonModule, SupportUsComponent, RouterModule.forChild(routes)]
})
export class SupportUsModule {} 