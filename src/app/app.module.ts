import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AdvicesService } from './services/advices.service';

import { AppComponent } from './app.component';
import { AdvicesComponent } from './components/advices/advices.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AdvicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
