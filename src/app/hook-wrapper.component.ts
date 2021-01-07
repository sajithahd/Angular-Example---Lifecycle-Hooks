import { Component } from "@angular/core";

@Component({
  selector: 'hook-wrapper',
  template: ` 
    <div>
      Hook Wrapper Component
    </div>
    <button (click)="toggleHook()">Toggle Hook Component</button>

    <hook [name]="name"></hook>
  `,
  styleUrls: [ './app.component.css' ]
})

export class HookWrapperComponent{
  name: string;

  constructor(){
    this.name = "HOOK DEMO"
  }

  toggleHook(){    
  }
}