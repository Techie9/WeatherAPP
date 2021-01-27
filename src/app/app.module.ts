import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    AlertModule.forRoot()
  ],
  providers: [WeatherService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
