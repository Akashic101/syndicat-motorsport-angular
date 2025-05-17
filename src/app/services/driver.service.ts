import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Driver {
  guid: string;
  rank: number;
  name: string;
  elo: number;
  license: string;
  licenseValue: number;
  safetyRating: string;
  safetyRatingValue: number;
}

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSPXEpA0_3WvJmtxJTKZ97Bi8tbZWsjCZT892N4mNgdaMJyhO-Syh1Xn-Yf4KaGw9SAZjGRwjtCpjZb/pub?gid=254771285&single=true&output=csv';

  private getSafetyRatingValue(rating: string): number {
    switch (rating) {
      case 'S': return 5;
      case 'A': return 4;
      case 'B': return 3;
      case 'C': return 2;
      case 'D': return 1;
      default: return 0;
    }
  }

  private getLicenseValue(license: string): number {
    switch (license) {
      case 'Gold': return 4;
      case 'Silver': return 3;
      case 'Bronze': return 2;
      case 'Rookie': return 1;
      default: return 0;
    }
  }

  constructor(private http: HttpClient) {}

  getDrivers(): Observable<Driver[]> {
    return this.http.get(this.csvUrl, { responseType: 'text' })
      .pipe(
        map(csv => this.parseCSV(csv))
      );
  }

  private parseCSV(csv: string): Driver[] {
    const lines = csv.split('\n');
    const drivers: Driver[] = [];
    
    // Skip header row and process each line
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const [guid, rank, nameWithLink, elo, license, safetyRating] = line.split(',').map(item => item.trim().replace(/"/g, ''));
      if (!guid || !rank || !nameWithLink || !elo || !license || !safetyRating) continue;

      // Extract name from anchor tag
      let name = nameWithLink;
      const anchorMatch = nameWithLink.match(/>([^<]+)</);
      if (anchorMatch && anchorMatch[1]) {
        name = anchorMatch[1].trim();
      }

      drivers.push({
        guid,
        rank: parseInt(rank),
        name,
        elo: parseInt(elo),
        license,
        licenseValue: this.getLicenseValue(license),
        safetyRating,
        safetyRatingValue: this.getSafetyRatingValue(safetyRating)
      });
    }

    return drivers;
  }
} 