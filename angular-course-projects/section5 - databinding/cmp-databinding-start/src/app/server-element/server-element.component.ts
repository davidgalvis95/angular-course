import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native, encapculations allow us to perform some actions such as the styling, not only for this component, but globally, affecting even other components
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy {

  // By default all properties are only accesible from inside that component, not outside it
  // To make that property available to be used by the parent components we need to make them explicitly available, by adding  declarator, with this we expose the property for any component hosting
  // The string inside the Input brackets are the aliases that we provide to that component to be used as this outside the component, so this is when we dont want o make use of the component the same way inside and outside
  // We use the input tag because we are passing something inside of the component
  //As this is a property that is being read from the outside, through the dataBinding, specifically from the app side, we put this as an @Input tag
  @Input('srvElement') element: {
    type:string, name:string, content:string
  };
  // This is for demo purpose due that the name is the only thing that in showing in the html side
  @Input() name:string;
  // The @ViewChild only examines components that are part of the view while @ContetChild examines the content
  @ViewChild('heading', { static: true }) header:ElementRef;
  @ContentChild('contentParagraph', { static:true }) contentParagraph:ElementRef;
  constructor() {
    console.log('constructor called');
   }
   ngOnChanges(changes: SimpleChanges){
     console.log('ngOnChanges called');
     console.log(changes);
   }

  ngOnInit(): void {
    // Is called whenever an instance of the component is set
    console.log('ngOnInit called');
    console.log(`The text : ${this.header.nativeElement.textContent}`);
    console.log(`The text content of paragraph: ${this.contentParagraph.nativeElement.textContent}`)
  }
  ngDoCheck(){
    console.log('ngDoCheck called')
  }
  ngAfterContentInit(){
    // This is only called once, when the content is displayed in the view
    console.log('ngAfterContentInit called')
    console.log(`The text content of paragraph: ${this.contentParagraph.nativeElement.textContent}`)
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
    
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
    
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
    console.log(`The text: ${this.header.nativeElement.textContent}`)
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called')
  }
}
