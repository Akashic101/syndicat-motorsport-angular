import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { DriverService, Driver } from '../../services/driver.service';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'sm-driver-leaderboard',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    TagModule,
    ProgressSpinnerModule,
    RouterModule,
    ButtonModule,
  ],
  template: `
    <div class="card">
      @if (loading) {
      <div class="flex justify-content-center">
        <p-progressSpinner />
      </div>
      } @else if (error) {
      <div class="text-red-500">
        Error loading drivers. Please try again later.
      </div>
      } @else {
      <div class="flex justify-content-between mb-4">
        <span class="p-input-icon-left">
          <i class="pi pi-search"></i>
          <input
            pInputText
            type="text"
            (input)="onGlobalFilter($event)"
            placeholder="Search drivers..."
          />
        </span>
      </div>

      <p-table
        #dt
        [value]="drivers"
        [tableStyle]="{ 'min-width': '50rem' }"
        [showCurrentPageReport]="true"
        [globalFilterFields]="['name', 'license', 'safetyRating']"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} drivers"
        [sortField]="'rank'"
        [sortOrder]="1"
      >
        <ng-template pTemplate="header">
          <tr>
            <th pSortableColumn="rank">
              Rank <p-sortIcon field="rank"></p-sortIcon>
            </th>
            <th pSortableColumn="name">
              Driver <p-sortIcon field="name"></p-sortIcon>
            </th>
            <th pSortableColumn="elo">
              ELO <p-sortIcon field="elo"></p-sortIcon>
            </th>
            <th pSortableColumn="licenseValue">
              License <p-sortIcon field="licenseValue"></p-sortIcon>
            </th>
            <th pSortableColumn="safetyRatingValue">
              Safety Rating <p-sortIcon field="safetyRatingValue"></p-sortIcon>
            </th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-driver>
          <tr>
            <td>{{ driver.rank }}</td>
            <td>{{ driver.name }}</td>
            <td>{{ driver.elo }}</td>
            <td>
              <p-tag
                [value]="driver.license"
                [severity]="getLicenseSeverity(driver.license)"
              ></p-tag>
            </td>
            <td>
              <p-tag
                [value]="driver.safetyRating"
                [severity]="getSafetyRatingSeverity(driver.safetyRating)"
              ></p-tag>
            </td>
            
          </tr>
        </ng-template>
      </p-table>
      }
    </div>
  `,
  styles: [
    `
      :host ::ng-deep .p-progressspinner {
        width: 50px;
        height: 50px;
      }
      :host ::ng-deep .card {
        padding: 2rem;
      }
    `,
  ],
})
export class DriverLeaderboardComponent implements OnInit {
  @ViewChild('dt') dt!: Table;

  drivers: Driver[] = [];
  loading = true;
  error = false;

  constructor(private driverService: DriverService) {}

  ngOnInit() {
    this.loadDrivers();
  }

  private loadDrivers() {
    this.loading = true;
    this.error = false;

    this.driverService.getDrivers().subscribe({
      next: (drivers) => {
        this.drivers = drivers;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading drivers:', err);
        this.error = true;
        this.loading = false;
      },
    });
  }

  onGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dt.filterGlobal(input.value, 'contains');
  }

  getLicenseSeverity(
    license: string
  ): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
    switch (license) {
      case 'Gold':
        return 'warn';
      case 'Silver':
        return 'info';
      case 'Bronze':
        return 'success';
      case 'Rookie':
        return 'danger';
      default:
        return 'secondary';
    }
  }

  getSafetyRatingSeverity(
    rating: string
  ): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
    switch (rating) {
      case 'S':
        return 'success';
      case 'A':
        return 'warn';
      case 'B':
        return 'info';
      case 'C':
        return 'danger';
      case 'D':
        return 'danger';
      default:
        return 'secondary';
    }
  }
}
