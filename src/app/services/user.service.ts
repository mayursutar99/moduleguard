import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [];
  addUser(username:string, password:string) {
    this.users.push({username, password});  
    console.log(this.users)
  }
  getUser(){
    return this.users;
  }
  
}
