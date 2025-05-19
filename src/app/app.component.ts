import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [
    ButtonModule,
    InputTextModule,
    RouterOutlet,
    RouterModule,
    AvatarModule,
    FooterComponent,
    CommonModule,
    MenubarModule,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'syndicate-motorsport-angular-website';

  items: MenuItem[] | undefined;

  isLoggedIn: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Events and Leagues',
        icon: 'pi pi-calendar',
        route: '/events-and-leagues',
      },
      {
        label: 'Drivers',
        icon: 'pi pi-user',
        route: '/drivers',
      },
      {
        label: 'Lap Records',
        icon: 'pi pi-clock',
        route: '/lap-records',
      },
      {
        label: 'Media',
        icon: 'pi pi-images',
      },
      {
        label: 'Support us',
        icon: 'pi pi-info-circle',
        route: '/support-us',
      },
    ];
  }
}
