import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CtaComponent } from "../../components/cta/cta.component";
import { StatFieldComponent } from "../../components/stat-field/stat-field.component";
import { DiscordService } from '../../services/discord.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sm-landing-page',
  imports: [
    ButtonModule,
    CardModule,
    CtaComponent,
    StatFieldComponent,
    NgComponentOutlet
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  discordMembers: number | null = null;
  totalLapRecords: number | null = null;

  @ViewChild('eventTableContainer', { read: ViewContainerRef }) eventTableContainer!: ViewContainerRef;
  eventTableComponent: any;

  get yearsOfExperience(): number {
    const start = new Date(2020, 9, 1); // October is month 9 (0-indexed)
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    // If before October 1st this year, subtract 1
    if (
      now.getMonth() < 9 ||
      (now.getMonth() === 9 && now.getDate() < 1)
    ) {
      years--;
    }
    return years;
  }

  constructor(private discordService: DiscordService, private http: HttpClient) {}

  async ngOnInit() {
    this.discordService.getMemberCount().subscribe(count => {
      this.discordMembers = count;
    });

    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSPXEpA0_3WvJmtxJTKZ97Bi8tbZWsjCZT892N4mNgdaMJyhO-Syh1Xn-Yf4KaGw9SAZjGRwjtCpjZb/pub?gid=462474009&single=true&output=csv';
    this.http.get(csvUrl, { responseType: 'text' }).pipe(
      map(csv => csv.split('\n').filter(line => line.trim().length > 0).length - 1)
    ).subscribe(count => {
      this.totalLapRecords = count;
    });

    // Dynamically import EventTableComponent
    const { EventTableComponent } = await import('../../components/event-table/event-table.component');
    this.eventTableComponent = EventTableComponent;
  }
}
