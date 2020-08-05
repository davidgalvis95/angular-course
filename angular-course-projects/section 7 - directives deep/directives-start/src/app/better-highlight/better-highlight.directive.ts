import { Directive,OnInit,ElementRef,Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  // Those input fields act as a property binding, so that we can set the property from outside, and it listens to the events that were set in the directive
  @Input() defaultColor:string = 'transparent';
  //@Input() highlightColor:string = 'blue'

  // We can reference the input field using an alias so that it simplifies the way it is called from the DOM, it's not needed but could be practical
  @Input('appBetterHighlight') highlightColor:string = 'blue'
  //@Input() highlightColor:string = 'blue'
  // The hostbinding is a handy way to perfomr the same dynamical change and access to the DOM using a directive, here we set inside the parentheses, the property that we want to change or we want to access and start it
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';
// This is a better approach when dealing with some servers that have no access to the browser, due that they enable to be referenced
  constructor(private elRef:ElementRef,private renderer:Renderer2) { 
    
  }
  ngOnInit(){
  // tHE syntax of this is the following one:
  // this.renderer.setStyle(the element we place on, the property we want to override, the new value of that property)

    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }
  // This HostListener acts as an addEventListener in javascript, due that it enables to change the dom dinamically, whn an event happens
  @HostListener('mouseenter') mouseover(eventData: Event){
  //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    console.log(this.backgroundColor);
    console.log(this.highlightColor);
  // The following is the same than the last line, but using hostbinding
  this.backgroundColor = this.highlightColor;
  }
// If we create an event data this will listen to the data related to the event
  @HostListener('mouseleave') mouseleave(eventData: Event){
  //this.renderer.setStyle(this.elRef.nativeElement,'background-color','red');

  this.backgroundColor=this.defaultColor;
  }
}
