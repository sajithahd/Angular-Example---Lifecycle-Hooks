import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  template: `<h3>{{appName}}!</h3>`
})
export class HelloComponent  {
  @Input() appName: string;
}
