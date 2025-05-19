import { TableModule } from 'primeng/table';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { EventTableComponent } from "../../components/event-table/event-table.component";
import { CtaComponent } from "../../components/cta/cta.component";
import { StatFieldComponent } from "../../components/stat-field/stat-field.component";
import { BlogCardComponent } from "../../components/blog-card/blog-card.component";
import { DiscordService } from '../../services/discord.service';

@Component({
  selector: 'sm-landing-page',
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    CardModule,
    EventTableComponent,
    CtaComponent,
    StatFieldComponent,
    BlogCardComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  discordMembers: number | null = null;

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

  constructor(private discordService: DiscordService) {}

  ngOnInit() {
    this.discordService.getMemberCount().subscribe(count => {
      this.discordMembers = count;
    });
  }
}
