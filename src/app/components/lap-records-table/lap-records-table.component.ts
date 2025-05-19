import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

interface LapRecord {
  Track: string;
  Car: string;
  Platform: string;
  Driver: string;
  BestLapNum: number;
}

interface Option {
  label: string;
  value: string;
}

@Component({
  selector: 'sm-lap-records-table',
  standalone: true,
  imports: [CommonModule, TableModule, MultiSelectModule, FormsModule, InputTextModule],
  templateUrl: './lap-records-table.component.html',
  styleUrl: './lap-records-table.component.scss'
})
export class LapRecordsTableComponent implements OnInit {
  records: LapRecord[] = [];
  loading = true;
  error: string | null = null;
  availablePlatforms: Option[] = [];
  selectedPlatforms: string[] = [];
  filterTrack = '';
  filterCar = '';
  filterDriver = '';

  constructor(private http: HttpClient) {}

  get filteredRecords(): (LapRecord & { formattedBestLap: string })[] {
    return this.records
      .filter(r =>
        (this.selectedPlatforms.length === 0 || this.selectedPlatforms.includes(r.Platform)) &&
        (!this.filterTrack || r.Track.toLowerCase().includes(this.filterTrack.toLowerCase())) &&
        (!this.filterCar || r.Car.toLowerCase().includes(this.filterCar.toLowerCase())) &&
        (!this.filterDriver || r.Driver.toLowerCase().includes(this.filterDriver.toLowerCase()))
      )
      .map(r => ({ ...r, formattedBestLap: this.formatBestLapNum(r.BestLapNum) }));
  }

  ngOnInit() {
    this.http.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vSPXEpA0_3WvJmtxJTKZ97Bi8tbZWsjCZT892N4mNgdaMJyhO-Syh1Xn-Yf4KaGw9SAZjGRwjtCpjZb/pub?gid=462474009&single=true&output=csv', { responseType: 'text' })
      .subscribe({
        next: csv => {
          this.records = this.parseCSV(csv);
          const platforms = Array.from(new Set(this.records.map(r => r.Platform))).sort();
          this.availablePlatforms = platforms.map(p => ({ label: p, value: p }));
          this.selectedPlatforms = platforms;
          this.loading = false;
        },
        error: err => {
          this.error = 'Failed to load lap records.';
          this.loading = false;
        }
      });
  }

  onPlatformChange() {}

  parseCSV(csv: string): LapRecord[] {
    const lines = csv.split('\n').filter(line => line.trim().length > 0);
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
      const values = line.split(',');
      const record: any = {};
      headers.forEach((header, i) => {
        record[header.trim()] = values[i]?.trim() || '';
      });
      // Map and format fields
      return {
        Track: this.formatName(record['TrackName']),
        Car: this.formatName(record['CarModel'], true),
        Platform: record['Platform'],
        Driver: record['Driver'],
        BestLapNum: Number(record['BestLap_Num'])
      } as LapRecord;
    });
  }

  formatName(name: string | undefined | null, isCar: boolean = false): string {
    if (!name) return '';
    let formatted = name;
    // Remove known prefixes at the start
    const prefixes = ['ks_', 'urd_', 'tc_', 'ac_legends_', 'dr_', 'wsc_'];
    if (isCar) {
      for (const prefix of prefixes) {
        if (formatted.toLowerCase().startsWith(prefix)) {
          formatted = formatted.substring(prefix.length);
          break;
        }
      }
    } else {
      if (formatted.toLowerCase().startsWith('ks_')) {
        formatted = formatted.substring(3);
      }
    }
    // Replace underscores with spaces, capitalize each word
    return formatted
      .replace(/_/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  }

  formatBestLapNum(ms: number | undefined | null): string {
    if (typeof ms !== 'number' || isNaN(ms)) return '';
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = ms % 1000;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  }
} 