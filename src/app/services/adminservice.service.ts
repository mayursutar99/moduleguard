
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
   admins = [
    { username: "mayur", password: "mayur" },
    { username: "shubham", password: "shubham" }
];

  getAdmins(){
    return this.admins;
  }

}
