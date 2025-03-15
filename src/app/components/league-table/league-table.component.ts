import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'sm-league-table',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, IconFieldModule, InputIconModule, MultiSelectModule, FormsModule, SelectModule],
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent {
  // Sample league data
  leagues = [
    {
      id: 1,
      name: 'Formula 1 2025',
      cars: 'Ferrari, Mercedes, Red Bull',
      sim: 'Assetto Corsa',
      rounds: 10,
      drivers: 20,
      status: 'active'
    },
    {
      id: 2,
      name: 'IndyCar 2025',
      cars: 'Chevrolet, Honda',
      sim: 'iRacing',
      rounds: 15,
      drivers: 18,
      status: 'planned'
    },
    {
      id: 3,
      name: 'MotoGP 2025',
      cars: 'Yamaha, Honda, Ducati',
      sim: 'RFactor 2',
      rounds: 12,
      drivers: 22,
      status: 'completed'
    }
  ];

  // The statuses that will appear in the dropdown filter
  statuses = [
    { label: 'Planned', value: 'planned' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' }
  ];

  // Loading state for the table
  loading = false;

  // Global search filtering
  dt: any;
  getSeverity(status: string): 'success' | 'info' | 'warn' | 'danger' | 'contrast' | undefined {
    switch (status) {
      case 'active':
        return 'success';  // 'active' status maps to 'success' severity
      case 'completed':
        return 'warn';     // 'completed' status maps to 'warn' severity (not 'warning')
      case 'planned':
        return 'info';     // 'planned' status maps to 'info' severity
      default:
        return 'info';     // default to 'info' severity
    }
  }
  
}
