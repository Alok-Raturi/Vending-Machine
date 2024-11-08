import { AuthService } from './services/auth.service';
import { Routes } from '@angular/router';
import { AvailableItemsComponent } from './components/user/available-items/available-items.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ConfirmCodeComponent } from './components/auth/confirm-code/confirm-code.component';
import { UpdateBalanceComponent } from './components/auth/update-balance/update-balance.component';
import { BuyItemComponent } from './components/user/buy-item/buy-item.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { UpdateStocksComponent } from './components/admin/update-stocks/update-stocks.component';
import { SendVerificationComponent } from './components/auth/send-verification/send-verification.component';
import { isLoggedIn } from './guards/is-logged-in.guard';
import { isAdmin } from './guards/is-admin.guard';








export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: AvailableItemsComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'confirm',
    component:ConfirmCodeComponent,
  },
  {
    path:'not-verified',
    component:SendVerificationComponent
  },
  {
    path:'add-balance',
    component: UpdateBalanceComponent,
    canActivate:[isLoggedIn]
  },
  {
    path:'buy/:code',
    component: BuyItemComponent,
    canActivate:[isLoggedIn]
  },
  {
    path:'admin',
    children:[
      {
        path:'add-product',
        component:AddProductComponent,
        canActivate:[isLoggedIn,isAdmin]
      },
      {
        path:'update-stock',
        component:UpdateStocksComponent
      }
    ]
  }
];
