import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'Testserver', content:'This is a test server!'}];
  numCounts = [];
  theOddMsgP = ', is an ODD number.'
  theEvenMsgP = ', is an EVEN number.'
  flag = false;
  // newServerName = '';
  // newServerContent = '';

  onServerAdded(serverData: {serverName:string,serverContent:string}) {
    console.log(serverData.serverName);
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent

    });
    console.log(this.serverElements);
  }

  onBlueprintAdded(bluePrint: {serverName: string, serverContent: string }) {
    console.log(bluePrint.serverName);
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrint.serverName,
      content: bluePrint.serverContent
    });
    console.log(this.serverElements);
  }
// In the following method we will change the way the element is changed
  onChangeFisrt(){
    this.serverElements[0].name='Changed!';
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }

  onIncrement(increment:number){
    this.flag=false;
    console.log(increment);
    this.numCounts.push(increment);
  }
  onReset(theFlag:boolean){
    this.flag=theFlag;
    this.numCounts.splice(0,this.numCounts.length);
  }
}
