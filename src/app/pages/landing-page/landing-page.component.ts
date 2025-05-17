import { TableModule } from 'primeng/table';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { EventTableComponent } from "../../components/event-table/event-table.component";
import { CtaComponent } from "../../components/cta/cta.component";
import { StatFieldComponent } from "../../components/stat-field/stat-field.component";
import { BlogCardComponent } from "../../components/blog-card/blog-card.component";

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
export class LandingPageComponent {

}
