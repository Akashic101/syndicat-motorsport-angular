import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverLeaderboardComponent } from "../../components/driver-leaderboard/driver-leaderboard.component";

@Component({
  selector: 'sm-drivers',
  imports: [CommonModule, DriverLeaderboardComponent],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss'
})
export class DriversComponent {}
