import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  api_key         = '3dbb42bce1adcab687f7cd945ff9fa6c';
  foreCastURL     = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  currentDataURL  = 'https://api.openweathermap.org/data/2.5/find?q=';

  constructor(private _http: HttpClient) { }

  // getting the current weather of the city
  getCurrentWeather(city_Name: String): Observable<any> {
    return this._http
      .get<any[]>( this.currentDataURL + city_Name + '&units=' + 'metric' + '&appid=' + this.api_key);
  }

  // getting the 5 days forecast of the city
  getWeatherByCityName(city_Name: String): Observable<any> {
    return this._http
           .get<any[]>( this.foreCastURL + city_Name + '&appid=' + this.api_key + '&units=' + 'metric');
  }
}
