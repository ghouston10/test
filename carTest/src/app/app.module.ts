import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { CarService } from './car.service';
import { GroupByPipe } from './group-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ CarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
