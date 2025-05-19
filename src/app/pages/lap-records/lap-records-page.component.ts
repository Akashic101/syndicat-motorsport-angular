import { Component } from '@angular/core';
import { LapRecordsTableComponent } from '../../components/lap-records-table/lap-records-table.component';

@Component({
  selector: 'sm-lap-records-page',
  standalone: true,
  imports: [LapRecordsTableComponent],
  templateUrl: './lap-records-page.component.html',
  styleUrl: './lap-records-page.component.scss'
})
export class LapRecordsPageComponent {} 