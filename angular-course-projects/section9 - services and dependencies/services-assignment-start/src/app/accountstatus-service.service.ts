import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class AccountStatusServiceService {

  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  accountStatusUpdated = new EventEmitter<string>();

  constructor() {}

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    //this.accountStatusUpdated.emit('active');
  }
  
  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    //this.accountStatusUpdated.emit('inactive');
  }

}
