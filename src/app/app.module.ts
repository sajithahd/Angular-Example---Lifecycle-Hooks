import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HookComponent } from "./hook.component";
import { HookWrapperComponent } from "./hook-wrapper.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HookComponent,
    HookWrapperComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
