import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sm-stat-field',
  imports: [CommonModule],
  templateUrl: './stat-field.component.html',
  styleUrl: './stat-field.component.scss'
})
export class StatFieldComponent {
  stat = input.required();
  text = input.required();
  color = input.required();
}
