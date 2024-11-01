import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(){

  }

  onSubmit() {

  }

}
