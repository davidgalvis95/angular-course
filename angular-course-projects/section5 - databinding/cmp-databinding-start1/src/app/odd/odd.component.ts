import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input('theOddCount') oddCount:number;
  //@Input('theOddMsg') oddMsg:string = ', is an ODD number';
  constructor() { }

  ngOnInit(): void {
  }

  isCountOdd(){
    const isOdd = this.oddCount % 2 === 1?true:false;
    console.log(`${this.oddCount} ${isOdd}`);
  }

}
