import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button"
import { AuthService } from '../../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private authService: AuthService){}

  get isTokenAvailable(){
    return this.authService.isTokenAvailable
  }

  logout(){
    this.authService.logout().subscribe((data)=>console.log('Data successfully logged out'))
  }
}
