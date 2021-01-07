import { Component } from "@angular/core";

@Component({
  selector: 'hook-wrapper',
  template: ` 
    <div>
      Hook Wrapper Component
    </div>
    <button (click)="toggleHook()">Toggle Hook Component</button>

    <hook *ngIf="viewChild" [name]="name"></hook>
  `,
  styleUrls: [ './app.component.css' ]
})

export class HookWrapperComponent{
  name: string;
  viewChild: boolean

  constructor(){
    this.name = "HOOK DEMO"
  }

  toggleHook(){ 
    this.viewChild = ! this.viewChild;
  }
}