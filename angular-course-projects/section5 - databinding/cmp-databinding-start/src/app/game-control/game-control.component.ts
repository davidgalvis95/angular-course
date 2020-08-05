import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
// https://ultimatecourses.com/blog/component-events-event-emitter-output-angular-2
  // @Input() count:number = 0;
  count:number = 0;
  state: boolean;
  @Output() increment = new EventEmitter<number>();
  @Output() resetTheTimerEvent = new EventEmitter<boolean>();

  private interval = 0;
  

  constructor() {
    //this.count=0;
   }

  ngOnInit(): void {
  }

  onIncrementing(){
    this.interval = window.setInterval(() => {
      this.count+=1;
      //console.log(this.count);
      this.increment.emit(this.count);
    },1000)
  }

  stopIncrementing(){
    console.log(this.count);
    if (this.interval) {
      window.clearInterval(this.interval);
      //this.count -=this.count; 
    }
  }

  resetTheTimer(){
    this.count -= this.count;
    this.state = true;
    this.resetTheTimerEvent.emit(this.state);
  }

}
