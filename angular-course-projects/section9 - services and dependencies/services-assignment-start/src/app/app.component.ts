import { Component } from '@angular/core';
import { AccountStatusServiceService } from './accountstatus-service.service';
import { CounterService } from './counter.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private accountStatusService:AccountStatusServiceService,
              private counterService:CounterService){
    
    this.accountStatusService.accountStatusUpdated.subscribe((status: string) => {
      
      console.log("New Status: " + status);
      this.counterService.onSetChanges(status);         
    }
        
    );

  }

  ngOnInit(){
    this.activeUsers = this.accountStatusService.activeUsers;
    this.inactiveUsers = this.accountStatusService.inactiveUsers;
  }
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
