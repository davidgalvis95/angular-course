import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  toInactiveCount:number = 0;
  toActiveCount:number = 0;

  constructor() { }


  onSetChanges (status:string) {
    if(status === 'active.'){
      this.toActiveCount ++;
      console.log('Type of movement: Account set to ' + status +' Accounts moved to active, ' + this.toActiveCount);
    }else{
      this.toInactiveCount ++;
      console.log('Type of movement: Account set to ' + status +' Accounts moved to inactive, ' + this.toInactiveCount);
    }
  }


}
