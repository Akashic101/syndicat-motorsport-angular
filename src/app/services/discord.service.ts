import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DiscordService {
  private inviteUrl = 'https://discord.com/api/v9/invites/bw7nfEeJ?with_counts=true&with_expiration=true';

  constructor(private http: HttpClient) {}

  getMemberCount(): Observable<number> {
    return this.http.get<any>(this.inviteUrl).pipe(
      map(res => res.approximate_member_count)
    );
  }
} 