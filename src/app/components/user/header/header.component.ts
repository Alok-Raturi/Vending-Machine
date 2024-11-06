import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private authService: AuthService,private router:Router){}

  get isTokenAvailable(){
    return this.authService.isTokenAvailable
  }

  get isAdmin(){
    return this.authService.roleValue
  }

  logout(){
    this.authService.logout().subscribe((data)=>this.router.navigate(['/home']))
  }

}
