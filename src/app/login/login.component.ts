import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName:any;
  pass:any;
  user:any;
  constructor(private users:UserService) {
    this.user=users.getUser;
  }
  
  login(username:any,password:any) {
  }
}
