import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'sm-driver-leaderboard',
  imports: [CommonModule, TableModule, InputTextModule, FormsModule, InputIconModule, IconFieldModule],
  templateUrl: './driver-leaderboard.component.html',
  styleUrl: './driver-leaderboard.component.scss'
})
export class DriverLeaderboardComponent {
  @ViewChild('dt') dt!: Table;  // Reference to the p-table component

  drivers = [
    { name: 'Lewis Hamilton', starts: 300, podiums: 100, wins: 95, licence: 'A', safetyRating: 92 },
    { name: 'Max Verstappen', starts: 150, podiums: 75, wins: 50, licence: 'A', safetyRating: 90 },
    { name: 'Sebastian Vettel', starts: 250, podiums: 130, wins: 60, licence: 'A', safetyRating: 85 },
    { name: 'Charles Leclerc', starts: 120, podiums: 45, wins: 10, licence: 'B', safetyRating: 87 },
    { name: 'Valtteri Bottas', starts: 200, podiums: 70, wins: 15, licence: 'A', safetyRating: 90 }
  ];

  loading: boolean = false;

  // Global search handler
  onGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;  // Cast to HTMLInputElement
    this.dt.filterGlobal(input.value, 'contains');   // Perform global filter
  }
}
