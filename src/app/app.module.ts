import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomButtonComponent } from './bottom-button/bottom-button.component';
import { TopButtonComponent } from './top-button/top-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomButtonComponent,
    TopButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
