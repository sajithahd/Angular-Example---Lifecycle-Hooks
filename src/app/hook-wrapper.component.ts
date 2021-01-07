import { Component } from "@angular/core";

@Component({
  selector: 'hook-wrapper',
  template: ` 
    <div>
      Hook Wrapper Component
    </div>
    <button (click)="toggleHook()">Toggle Hook Component</button>

    <hook *ngIf="displayMe" [name]="name"></hook>
  `,
  styleUrls: [ './app.component.css' ]
})

export class HookWrapperComponent{
  name: string;
  displayMe: boolean;

  constructor(){
    this.name = "HOOK DEMO"
  }

  toggleHook(){   
    this.displayMe = !this.displayMe; 
  }
}
