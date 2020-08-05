import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from '../logging.service'
import { AccountsService } from '../accounts-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // This providers array tells us which instance of the service we want. As we want the same than the parent componen, app-component, then we need to delete that instance from the actual providers array, so that it wont overrides the parent instance
  //providers: [LoggingService]
})
// If we provide a service in the parent component, that same instance of that service will be available for all the child components.
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // With the implementation of the service we dont nwwd the output anymore, because the event won't be listened
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService:AccountsService) { }
  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountsService.updateStatus(this.id,status)
    //this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
