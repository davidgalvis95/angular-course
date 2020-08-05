import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

// Theorically this injectable metadata tag is used only in components where we need to inject something into, if we dont need to inject something this is not needed, however to avoid the application to break it's better to add it to all the services
@Injectable()
export class AccountsService{
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];
// Now that we have injected the logging service we can emit an event that allo us to emit and subscribe/consume that event
    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService:LoggingService){}

    addAccount(name: string, status: string ) {
        

        this.accounts.push({name:name,status:status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(status);
    }
}