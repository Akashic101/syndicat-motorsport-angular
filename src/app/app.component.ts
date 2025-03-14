import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    Toolbar,
    ButtonModule,
    InputTextModule,
    RouterOutlet,
    AvatarModule,
    FooterComponent
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
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
  }
}
