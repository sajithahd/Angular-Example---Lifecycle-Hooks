import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { pickABooWrapperComponent } from './pick-a-boo-wrapper.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,pickABooWrapperComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
