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
      name: 'IndyCar League - Season 1',
      sim: 'Assetto Corsa',
      freeSpots: 4,
      rounds: 8,
      startDate: new Date('2025-01-12'),
      endDate: new Date('2025-02-15'),
      image:
        'https://i0.wp.com/syndicate-motorsport.com/wp-content/uploads/2022/07/July-Contest-9.jpg?resize=1536%2C864&ssl=1',
    },
    {
      name: 'Radical League - Season 3',
      sim: 'Assetto Corsa',
      freeSpots: 2,
      rounds: 6,
      startDate: new Date('2025-03-15'),
      endDate: new Date('2025-04-24'),
      image:
        'https://www.thespeedjournal.com/wp-content/uploads/2022/12/radical-motorsport-sr3-xxr-03.jpg',
    },
    {
      name: 'Rallye League - Season 1',
      sim: 'Richard Burns Rallye',
      freeSpots: 2,
      rounds: 6,
      startDate: new Date('2025-04-5'),
      endDate: new Date('2025-06-1'),
      image: 'https://i.ytimg.com/vi/BHK3e_Xr4GQ/maxresdefault.jpg',
    },
    {
      name: '1976 League - Season 2',
      sim: 'Assetto Corsa',
      freeSpots: 0,
      rounds: 12,
      startDate: new Date('2025-06-23'),
      endDate: new Date('2025-07-5'),
      image: 'https://i.ytimg.com/vi/0XXkPGnau6Q/maxresdefault.jpg',
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
