import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriverService } from '../driver.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver-details.component.html',
  styleUrl: './driver-details.component.scss',
})
export class DriverDetailsComponent implements OnInit {
  driver: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private driverService: DriverService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const driverId = params.get('id');
      if (driverId) {
        this.driverService.getDriverById(driverId).subscribe((driver) => {
          this.driver = driver;
        });
      }
    });
  }

  formatDrivingTime(totalMinutes: string): string {
    const minutes = parseFloat(totalMinutes);
    if (isNaN(minutes)) {
      return totalMinutes; // Return original value if not a number
    }

    const minutesPerDay = 24 * 60;
    const minutesPerHour = 60;

    const days = Math.floor(minutes / minutesPerDay);
    const remainingMinutesAfterDays = minutes % minutesPerDay;

    const hours = Math.floor(remainingMinutesAfterDays / minutesPerHour);
    const remainingMinutesAfterHours = remainingMinutesAfterDays % minutesPerHour;

    const parts: string[] = [];
    if (days > 0) {
      parts.push(`${days} day${days > 1 ? 's' : ''}`);
    }
    if (hours > 0 || days > 0) { // Show hours if more than 0 or if there are days
        parts.push(`${hours} hour${hours > 1 ? 's' : ''}`);
    }
    parts.push(`${Math.round(remainingMinutesAfterHours)} minute${Math.round(remainingMinutesAfterHours) > 1 ? 's' : ''}`);

    return parts.join(', ');
  }
}
