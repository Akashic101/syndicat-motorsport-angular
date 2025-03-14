import { TableModule } from 'primeng/table';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-landing-page',
  imports: [TableModule, CommonModule, ButtonModule, CardModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  events = [
    { eventName: 'Formula 1', track: 'Monaco', car: 'Ferrari', sim: 'iRacing', date: new Date('2025-03-20') },
    { eventName: 'GT Championship', track: 'Spa Francorchamps', car: 'Porsche 911', sim: 'Assetto Corsa', date: new Date('2025-03-25') },
    { eventName: 'Rally Cross', track: 'Lydden Hill', car: 'Subaru WRX', sim: 'Dirt Rally 2.0', date: new Date('2025-04-05') },
    // Add more events here as needed
  ];
}
