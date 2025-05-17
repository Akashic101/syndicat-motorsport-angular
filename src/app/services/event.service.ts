import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Event {
  eventName: string;
  track: string;
  car: string;
  sim: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSPXEpA0_3WvJmtxJTKZ97Bi8tbZWsjCZT892N4mNgdaMJyhO-Syh1Xn-Yf4KaGw9SAZjGRwjtCpjZb/pub?gid=1933046167&single=true&output=csv';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get(this.csvUrl, { responseType: 'text' })
      .pipe(
        map(csv => this.parseCSV(csv))
      );
  }

  private parseCSV(csv: string): Event[] {
    const lines = csv.split('\n');
    const events: Event[] = [];
    
    // Skip header row and process each line
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const [eventName, timeStr] = line.split(',').map(item => item.trim());
      if (!eventName || !timeStr) continue;

      // Extract the actual event name from the HTML anchor tag
      let cleanEventName = eventName;
      const anchorMatch = eventName.match(/>([^<]+)</);
      if (anchorMatch && anchorMatch[1]) {
        cleanEventName = anchorMatch[1].trim();
      }

      // Extract track name from event name
      let track = 'TBD';
      const trackMatch = cleanEventName.match(/\|(.*?)\|/);
      if (trackMatch && trackMatch[1]) {
        track = trackMatch[1].trim();
      }

      // Extract car type if mentioned
      let car = 'TBD';
      if (cleanEventName.includes('DTM')) {
        car = '90s DTM';
      } else if (cleanEventName.includes('Alpine')) {
        car = 'Alpine';
      }

      // Parse date and time
      const dateTime = new Date(timeStr);
      
      events.push({
        eventName: cleanEventName.replace(/"/g, '').trim(),
        track,
        car,
        sim: 'Assetto Corsa',
        date: dateTime
      });
    }

    // Sort events by date
    return events.sort((a, b) => a.date.getTime() - b.date.getTime());
  }
} 