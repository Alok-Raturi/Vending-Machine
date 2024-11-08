import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, SpinnerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLoading = false;
  constructor(private authService: AuthService, private router: Router) {}

  get isTokenAvailable() {
    return this.authService.isTokenAvailable;
  }

  get isAdmin() {
    return this.authService.roleValue;
  }

  logout() {
    this.isLoading = true;
    this.authService.logout().subscribe({
      next: (data) => {
        this.router.navigate(['/home']);
        this.isLoading = false;
      },
    });
  }
}
