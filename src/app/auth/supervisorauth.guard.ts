import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const supervisorauthGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router);
  let isvalid = localStorage.getItem('isvalidSuper');
  if(!isvalid){
    alert("Not authorized to activate")
    _router.navigate(['/'])
    return false;
  }
  return true;
};
