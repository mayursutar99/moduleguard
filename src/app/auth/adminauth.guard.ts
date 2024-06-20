import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminauthGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router);
  let isvalid = localStorage.getItem('isvalidadmin');
  if(!isvalid){
    alert("Not authorized to activate")
    _router.navigate(['/'])
    return false;
  }
  return true;
};
