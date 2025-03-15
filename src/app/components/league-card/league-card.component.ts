import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'sm-league-card',
  imports: [CommonModule, CardModule, ButtonModule, TagModule],
  templateUrl: './league-card.component.html',
  styleUrls: ['./league-card.component.scss'],
})
export class LeagueCardComponent {
  title = input.required<string>()
  sim = input.required<string>()
  rounds = input.required<string>()
  freeSpots = input.required<number>()  
  startDate = input.required<Date>()
  endDate = input.required<Date>()
  image = input.required<string>()

  get leagueStatus(): string {
    const currentDate = new Date();
    if (this.endDate() < currentDate) {
      return 'completed';
    } else if (this.startDate() <= currentDate && this.endDate() >= currentDate) {
      return 'running';
    } else {
      return 'planned';
    }
  }

  get isSignUpActive(): boolean {
    return this.leagueStatus === 'planned' && this.freeSpots() > 0;
  }
}
