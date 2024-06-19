import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private userService: UserService) {}
  Registered(usernames: any,passwords: any){
    this.userService.addUser(usernames.value,passwords.value);
    usernames.value = '';
    passwords.value = '';
  }
}
