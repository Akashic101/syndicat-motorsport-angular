import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSPXEpA0_3WvJmtxJTKZ97Bi8tbZWsjCZT892N4mNgdaMJyhO-Syh1Xn-Yf4KaGw9SAZjGRwjtCpjZb/pub?gid=0&single=true&output=csv';

  constructor(private http: HttpClient) { }

  getDriverById(id: string): Observable<any | undefined> {
    return this.http.get(this.csvUrl, { responseType: 'text' }).pipe(
      map(csvText => {
        const lines = csvText.split('\n');
        const headers = lines[0].split(',');
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',');
          const driver: any = {};
          for (let j = 0; j < headers.length; j++) {
            driver[headers[j].trim()] = values[j].trim();
          }
          if (driver['SteamID64'] === id) {
            return driver;
          }
        }
        return undefined;
      })
    );
  }
}
