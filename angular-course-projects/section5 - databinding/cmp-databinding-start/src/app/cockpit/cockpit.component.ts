import { Component, OnInit, Output,ViewChild,ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // The EventEmmiter creates the property as a new event, this evet will be passed to the hosting component, in this case the app one, the parentheses at the end of the expression build the constructor of that event
  //This allow us to create our own custom events
  // Here we expose our events to the outside using the Output tag, because we are passing come property to outside of the component
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string }>();

  serverElements = [];
  // This is a way in which we can select a property that is being passed in the DOM, even we can select an entire component, and manage it from the component, this s an alternative as well, to the two way binding
  // This way provides an element of type ElementRef, ths is why that is set that way in the declaration
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;
  // newServerName = '';
  // newServerContent = '';
  // Another way to go and reference the DOM from the component is by

  constructor() { }
  // This is a lyfecycle hook
  ngOnInit(): void {
  }
  // Using the alternative way
  onAddServer(serverNameInput) {
    // This can change the element, while not recommended
    // this.serverContentInput.nativeElement.value = 'something';
    // The following code creates the event based on the custom event we have defined, passing the data 
      console.log("im in this method");
      console.log(this.serverContentInput);
      console.log(serverNameInput.value);
      this.serverCreated.emit({
        serverName: serverNameInput.value,
        // We can use the nativeElement of the ElementRef element to get access to the underlying element, an the value to get access to its value
        serverContent: this.serverContentInput.nativeElement.value
      });
  }

  onAddBlueprint(serverNameInput) {
    console.log("im in 2 this method")
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
// @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;