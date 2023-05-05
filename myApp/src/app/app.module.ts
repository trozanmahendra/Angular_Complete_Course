import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { Alert1Component } from './alert1/alert1.component';
import { Alert2Component } from './alert2/alert2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Alert1Component,
    Alert2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
