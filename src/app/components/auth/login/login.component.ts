import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService:AuthService,private router:Router){

  }

  onSubmit() {
    return this.authService.signin(this.email,this.password).subscribe({
      next:(data)=>{
        this.router.navigate(['/home'])
      }
    })
  }

}
