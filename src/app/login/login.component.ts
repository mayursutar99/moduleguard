import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AdminserviceService } from '../services/adminservice.service';
import { SupervisorserviceService } from '../services/supervisorservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  user:any;
  isAdmin:boolean=false;
  isSuper:boolean=false;
  constructor(private users:UserService,private router:Router, private admins:AdminserviceService, private supervisors:SupervisorserviceService) {
  }
  
  login(username:any,password:any) {
    this.admins.getAdmins().forEach((element:any) => {
      if(element.username===username.value && element.password===password.value){
        this.isAdmin=true;
        
      }
    });
    this.supervisors.getSupaervisors().forEach((element:any) => {
      if(element.username===username.value && element.password===password.value){
        this.isSuper=true;
        
      }
    });
    this.users.getUser().forEach((element:any) => {
      if(element.username===username.value && element.password===password.value){
        
        if(this.isAdmin){
          this.router.navigate(['/product']);
          localStorage.setItem('isvalidadmin',"true");
        }else if(this.isSuper){
          this.router.navigate(['/category']);
          localStorage.setItem('isvalidSuper',"true");
        }
        
      }else{
        localStorage.setItem('isvalidadmin',"false");
          localStorage.setItem('isvalidSuper',"false");
      }
    });
  }
}
