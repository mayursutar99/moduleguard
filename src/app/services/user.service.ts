import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { userArray } from '../app.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: userArray[] = [];
  addUser(username:string, password:string) {
    this.users.push({username, password});
  }
  getUser(){
    return this.users;
  }
  
}
