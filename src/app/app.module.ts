import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { HookComponent } from "./hook.component";
import { HookWrapperComponent } from "./hook-wrapper.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    HookComponent,
    HookWrapperComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
