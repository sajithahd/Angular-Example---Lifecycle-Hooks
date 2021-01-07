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
    console.log("Constructor: " + this.name);
  }

  ngOnInit(): void {
    console.log("Constructor: " + this.name);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Constructor: " + this.name);
  }
  ngDoCheck(): void {
    console.log("Constructor: " + this.name);
  }
  ngAfterContentInit(): void {
    console.log("Constructor: " + this.name);
  }
  ngAfterContentChecked(): void {
    console.log("Constructor: " + this.name);
  }
  ngAfterViewInit(): void {
    console.log("Constructor: " + this.name);
  }
  ngAfterViewChecked(): void {
    console.log("Constructor: " + this.name);
  }
  ngOnDestroy(): void {
    console.log("Constructor: " + this.name);
  }
}
