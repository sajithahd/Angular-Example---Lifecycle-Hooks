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
    console.log("Constructor: " + `${this.name? this.name:'No name mapped yet'}`);
  }

  ngOnInit(): void {
    console.log("Constructor: " + this.name);
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    console.log("OnChanges: " + this.name);
  }
  ngDoCheck(): void {
    console.log("DoCheck: " + this.name);
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit: " + this.name);
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked: " + this.name);
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit: " + this.name);
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked: " + this.name);
  }
  ngOnDestroy(): void {
    console.log("OnDestroy: " + this.name);
  }

}
