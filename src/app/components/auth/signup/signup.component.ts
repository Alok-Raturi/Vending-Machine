import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent implements OnInit {
  username = '';
  email = '';
  password = '';
  confirmPassword =''
  errorMessage = '';

  ngOnInit(): void {}

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if(this.password !== this.confirmPassword) {
      this.errorMessage = "Password and confirm password do not match"
      return;
    }
    this.authService.signUp(this.email, this.password).subscribe({
      next:(data)=>{
        this.router.navigate(['/confirm'])
      },
      error: (err) => {
        this.errorMessage = err.message;
      },
    });
  }
}
