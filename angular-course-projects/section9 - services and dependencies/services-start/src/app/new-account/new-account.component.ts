import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts-service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // It's needed to create the providers tag in order to use the LoggingService or any service
  //providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
// Its better to use the service as an injected dependency, because it enables us to speak the angular language and structure, to do it we need to create an injected property, initialized in the constructor as an injected dependency, and set it in the providers section of the @Component, just after that we will be able to use it
  constructor(private loggingService:LoggingService,
    private accountsService:AccountsService){

      this.accountsService.statusUpdated.subscribe(
        (status:string) => alert('New Status: '+status)
      );
    }

  

  onCreateAccount(accountName: string, accountStatus: string) {
    // By implementing the service we wont need to emit the event anymore because we are not going tpo listen to it, instead we need to call the addAccount method of the account service
    //let newAccount= { accountName, accountStatus}
    this.accountsService.addAccount(accountName,accountStatus);
    
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });


    // // We should not instantiate the service on our own, because angular offers great functionalities to do it
    //const service = new LoggingService
    //console.log('A server status changed, new status: ' + accountStatus);
    //service.logStatusChange(accountStatus);

    //this.loggingService.logStatusChange(accountStatus);
  }
}
