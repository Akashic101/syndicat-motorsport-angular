import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'sm-cta',
  imports: [CommonModule, ButtonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {}
