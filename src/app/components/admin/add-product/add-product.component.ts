import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,SpinnerComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  isloading =false
  constructor(private adminService:AdminService,private router:Router){}

  onSubmit(form:NgForm){
    if(form.invalid){
      alert('Please fill all the fields');
      return
    }
    this.isloading=true
    this.adminService.addProduct(form.value).subscribe({
      next:()=>{
        this.isloading=false
      }
    })
    form.reset()
    this.router.navigate(['/home'])
  }
}
