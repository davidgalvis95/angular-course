import { Injectable } from '@angular/core';
//import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn=false;

  constructor() { 
    
  }
// This is method that returns a promise that is a mock one that resolves the status to true after some time
  isAuthenticated(){
    const promise = new Promise(
      (resolve,reject) => {
        setTimeout(() => {
          resolve(this.loggedIn = false);
        }, 1000)
      }
    )
    console.log(promise);
    return promise;
  }


  login(){
    this.loggedIn = true;
  }
  logout(){
    this.loggedIn = false;
  }
}
