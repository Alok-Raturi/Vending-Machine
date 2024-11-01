import { Component, ViewEncapsulation } from '@angular/core';
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
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService){

  }

  async signup(){
    console.log(this.username,this.email,this.password)
    await this.authService.signUp(this.username,this.email,this.password)
    .then((data:any) => console.log(data))
    .catch((err:any )=> console.error(err));
  }
  onSubmit() {
    console.log('submit')
    this.signup()
  }
}
