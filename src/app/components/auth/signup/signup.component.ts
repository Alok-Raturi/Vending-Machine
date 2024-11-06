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
})
export class SignupComponent implements OnInit {
  username = '';
  email = '';
  password = '';
  confirmPassword =''
  errorMessage = '';
  isloading =false

  ngOnInit(): void {}

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if(this.password !== this.confirmPassword) {
      this.errorMessage = "Password and confirm password do not match"
      return;
    }
    this.isloading=true
    this.authService.signUp(this.email, this.password).subscribe({
      next:(data)=>{
        this.isloading=false
        this.router.navigate(['/confirm'])
      },
      error: (err) => {
        this.errorMessage = err.error;
        this.isloading=false
      },
    });
  }
}
