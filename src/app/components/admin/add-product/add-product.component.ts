import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private adminService:AdminService,private router:Router){}

  onSubmit(form:NgForm){
    if(form.invalid){
      alert('Please fill all the fields');
      return
    }

    this.adminService.addProduct(form.value).subscribe((data)=>console.log('Successfully Added Product'))
    form.reset()
    this.router.navigate(['/home'])
  }
}
