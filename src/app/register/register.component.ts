import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private userService: UserService,private router: Router) {}
  
  Registered(usernames: any,passwords: any){
    this.userService.addUser(usernames.value,passwords.value);
    usernames.value = '';
    passwords.value = '';
    this.router.navigate(['/']);
  }
}
