import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupervisorserviceService {
  supervisors = [
    { username: "akshay", password: "akshay" }
];
  getSupaervisors(){
    return this.supervisors;
  }
}
