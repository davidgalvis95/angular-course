import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountStatusServiceService } from '../accountstatus-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();

  constructor(private accountStatusService:AccountStatusServiceService){

    // this.accountStatusService.accountStatusUpdated.subscribe((status: string) =>
    //     console.log("New Status: " + status)
        
    // );
  }

  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    this.accountStatusService.setToActive(id);
    this.accountStatusService.accountStatusUpdated.emit('active.')
  }
}
