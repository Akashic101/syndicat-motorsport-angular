import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventTableComponent } from "../../components/event-table/event-table.component";
import { LeagueTableComponent } from "../../components/league-table/league-table.component";

@Component({
  selector: 'sm-events-and-leagues',
  imports: [CommonModule, EventTableComponent, LeagueTableComponent],
  templateUrl: './events-and-leagues.component.html',
  styleUrl: './events-and-leagues.component.scss'
})
export class EventsAndLeaguesComponent {}
