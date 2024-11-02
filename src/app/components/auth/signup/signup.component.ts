import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent implements OnInit {
  username = '';
  email = '';
  password = '';
  errorMessage = '';

  ngOnInit(): void {}

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signUp(this.email, this.password).subscribe({
      next:(data)=>{
        console.log(data)
        this.router.navigate(['/confirm'])
      },
      error: (err) => {
        console.log(err)
        this.errorMessage = err.message;
      },
    });
  }
}
