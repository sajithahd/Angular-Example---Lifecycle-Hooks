import { AfterContentChecked, AfterContentInit, AfterViewChecked,  AfterViewInit,  Component, DoCheck,  Input, OnChanges,  OnDestroy,    OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: 'hook',
  template:`
    <div>Now you can see me {{name}}</div>
  `
})

export class HookComponent 
      implements 
          OnInit, 
          OnChanges, 
          DoCheck,
          AfterContentInit,
          AfterContentChecked,
          AfterViewInit,
          AfterViewChecked,
          OnDestroy {

  @Input() name: string;

  constructor(){
    this.name = "";
    console.log("Constructor: " + `${this.name? this.name: ' props not intialized yet'}`);
  }

  ngOnInit(): void {
    console.log("ngOnInit: " + this.name);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    for(let prop in changes){
      if(prop === "name"){
          console.log("ngOnChanges: " + changes.name.currentValue);
      }
    }
  }
  ngDoCheck(): void {
    console.log("ngDoCheck: " + this.name);
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit: " + this.name);
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked: " + this.name);
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit: " + this.name);
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked: " + this.name);
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy: " + this.name);
  }
}
