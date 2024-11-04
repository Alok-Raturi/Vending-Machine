import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/user/header/header.component';
import { AvailableItemsComponent } from './components/user/available-items/available-items.component';
import { ConsiderationsComponent } from './components/user/considerations/considerations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,AvailableItemsComponent,ConsiderationsComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.authService.setTokens()
  }
}
