import { AuthService } from '../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-user-info',
  standalone: true,
  imports: [],
  templateUrl: './display-user-info.component.html',
  styleUrl: './display-user-info.component.css'
})
export class DisplayUserInfoComponent implements OnInit{
  user!:any
  constructor(private authService:AuthService){}

  ngOnInit(): void {
    if(this.authService.isTokenAvailable)
      this.authService.getUser().subscribe(data=>this.user=data)
  }

  get isAuthenticated(){
    return this.authService.isTokenAvailable
  }
}
