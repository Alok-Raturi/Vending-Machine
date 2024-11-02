import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/user/header/header.component';
import { AvailableItemsComponent } from './components/user/available-items/available-items.component';
import { ConsiderationsComponent } from './components/user/considerations/considerations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,AvailableItemsComponent,ConsiderationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vending-Machine';
}
