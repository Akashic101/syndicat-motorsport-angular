import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { LeagueCardComponent } from '../league-card/league-card.component';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
  selector: 'sm-league-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
    MultiSelectModule,
    FormsModule,
    SelectModule,
    LeagueCardComponent,
    CheckboxModule,
    InputTextModule,
    DropdownModule,
    IftaLabelModule,
  ],
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss'],
})
export class LeagueTableComponent {
  leagues = [
    {
      name: '90s DTM League - Season 01',
      sim: 'Assetto Corsa',
      freeSpots: 24,
      rounds: 8,
      startDate: new Date('2025-06-28'),
      endDate: new Date('2025-08-06'),
      image:
        'assets/images/90s_dtm_league.png',
      link: 'http://138.201.226.34:8092/championship/61d3cc7b-8968-4030-81fc-c1aec4623b45',
    },
    {
      name: 'Alpine A110 TCL Cup',
      sim: 'Assetto Corsa',
      freeSpots: 4,
      rounds: 6,
      startDate: new Date('2025-04-09'),
      endDate: new Date('2025-05-28'),
      image:
        'assets/images/alpine_110_league.png',
      link: 'http://138.201.226.34:8192/championship/2d6e8390-1be4-4a88-a6ba-0dafacde1ada',
    }, {
      name: 'More data to come',
      sim: '',
      freeSpots: 24,
      rounds: 8,
      startDate: new Date('0001-01-01'),
      endDate: new Date('0001-01-01'),
      image:
        'https://placehold.co/600x340',
      link: 'https://discord.gg/5bXJCYq',
    },
  ];

  statuses = [
    { label: 'All', value: '' },
    { label: 'Planned', value: 'planned' },
    { label: 'Running', value: 'running' },
    { label: 'Completed', value: 'completed' },
  ];

  searchName: string = '';
  searchSim: string = '';
  statusFilter: string = '';

  getLeagueStatus(league: {
    name?: string;
    sim?: string;
    freeSpots?: number;
    rounds?: number;
    startDate: any;
    endDate: any;
    image?: string;
    link?: string;
  }): string {
    const currentDate = new Date();
    if (league.endDate < currentDate) {
      return 'completed';
    } else if (
      league.startDate <= currentDate &&
      league.endDate >= currentDate
    ) {
      return 'running';
    } else {
      return 'planned';
    }
  }

  get filteredLeagues() {
    return this.leagues.filter((league) => {
      // Check if league name matches search term
      const matchesName = this.searchName
        ? league.name.toLowerCase().includes(this.searchName.toLowerCase())
        : true;
  
      // Check if sim matches search term
      const matchesSim = this.searchSim
        ? league.sim.toLowerCase().includes(this.searchSim.toLowerCase())
        : true;

  
      // Check if the league's status matches the selected filter
      const leagueStatus = this.getLeagueStatus(league);  // Get status using your existing logic
      const matchesStatus = this.statusFilter
        ? leagueStatus === this.statusFilter
        : true;
  
      return matchesName && matchesSim && matchesStatus;
    });
  }
  
}
