import { RouterOutlet } from '@angular/router';
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
    AvatarModule,
    FooterComponent,
    CommonModule,
    MenubarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'syndicate-motorsport-angular-website';

  items: MenuItem[] | undefined;

  isLoggedIn: boolean = true;

  ngOnInit() {
    this.items = [
      {
        label: 'Events and Leagues',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Drivers',
        icon: 'pi pi-times',
      },
      {
        label: 'Lap Records',
        icon: 'pi pi-times',
      },
      {
        label: 'Media',
        icon: 'pi pi-times',
      },
      {
        label: 'Patreon',
        icon: 'pi pi-times',
      },
      {
        label: 'Merch',
        icon: 'pi pi-times',
      },
    ];
  }
}
