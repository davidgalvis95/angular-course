import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input('theEvenCount') evenCount: number;
  //@Input('theOddMsg') oddMsg: string = ', is an ODD number';
  constructor() { }

  ngOnInit(): void {
  }

  isCountOdd() {
    const isEven = this.evenCount % 2 === 0 ? true : false;
    console.log(`${this.evenCount} ${isEven}`);
  }
}
