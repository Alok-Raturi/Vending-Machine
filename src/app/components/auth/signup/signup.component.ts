import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  encapsulation:ViewEncapsulation.None
})
export class SignupComponent implements OnInit{
  username = '';
  email = '';
  password = '';
  errorMessage = '';

  ngOnInit(): void {}

  constructor(private authService: AuthService){

  }

  signup(){
    console.log(this.username,this.email,this.password)
  }
  onSubmit() {
    console.log('submit')
    this.signup()
  }
}
