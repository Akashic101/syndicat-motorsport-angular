import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'sm-event-table',
  imports: [CommonModule, TableModule],
  templateUrl: './event-table.component.html',
  styleUrl: './event-table.component.scss',
})
export class EventTableComponent {
  events = [
    {
      eventName: 'Formula 1',
      track: 'Monaco',
      car: 'Ferrari',
      sim: 'iRacing',
      date: new Date('2025-03-20'),
    },
    {
      eventName: 'GT Championship',
      track: 'Spa Francorchamps',
      car: 'Porsche 911',
      sim: 'Assetto Corsa',
      date: new Date('2025-03-25'),
    },
    {
      eventName: 'Rally Cross',
      track: 'Lydden Hill',
      car: 'Subaru WRX',
      sim: 'Dirt Rally 2.0',
      date: new Date('2025-04-05'),
    },
    
  ];
}
