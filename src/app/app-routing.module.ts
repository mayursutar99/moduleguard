import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { adminauthGuard } from './auth/adminauth.guard';
import { supervisorauthGuard } from './auth/supervisorauth.guard';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'product',component:ProductComponent, canActivate:[adminauthGuard]},
  {path:'category',component:CategoryComponent, canActivate:[supervisorauthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
