import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountStatusServiceService } from '../accountstatus-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  //@Output() userSetToInactive = new EventEmitter<number>();

  constructor(private accountStatusService:AccountStatusServiceService){

          // this.accountStatusService.accountStatusUpdated.subscribe((status: string) =>
          //   console.log("New Status: " + status)
          // );
  }

  onSetToInactive(id: number) {
    this.accountStatusService.setToInactive(id);
    this.accountStatusService.accountStatusUpdated.emit('inactive.')
  }
}
