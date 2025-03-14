import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'sm-blog-card',
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  text = input.required();
  title = input.required();
  subtitle = input.required();
  image = input.required();
}
