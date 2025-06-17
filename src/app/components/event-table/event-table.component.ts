import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { EventService, Event } from '../../services/event.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'sm-event-table',
  standalone: true,
  imports: [CommonModule, TableModule, ProgressSpinnerModule],
  template: `
    <div class="card">
      @if (loading) {
        <div class="flex justify-content-center">
          <p-progressSpinner />
        </div>
      } @else if (error) {
        <div class="text-red-500">
          Error loading events. Please try again later.
        </div>
      } @else {
        <p-table [value]="events" [tableStyle]="{ 'min-width': '50rem' }">
          <ng-template pTemplate="header">
            <tr>
              <th>Event</th>
              <th>Sim</th>
              <th>Date</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-event>
            <tr>
              <td>{{event.eventName}}</td>
              <td>{{event.sim}}</td>
              <td>{{event.date | date:'medium'}}  BST (UTC+1)</td>
            </tr>
          </ng-template>
        </p-table>
      }
    </div>
  `,
  styles: [`
    :host ::ng-deep .p-progressspinner {
      width: 50px;
      height: 50px;
    }
    :host ::ng-deep .card {
      padding: 2rem;
    }
  `]
})
export class EventTableComponent implements OnInit {
  events: Event[] = [];
  loading = true;
  error = false;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  private loadEvents() {
    this.loading = true;
    this.error = false;
    
    this.eventService.getEvents().subscribe({
      next: (events) => {
        this.events = events;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading events:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}
