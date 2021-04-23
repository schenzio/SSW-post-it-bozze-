import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
//import { ajax } from "rxjs/ajax";

//definisco dove è iniettato il servizio
@Injectable({
  providedIn: 'root'
})

export class ChuckService {
  apiURL: string = "https://api.chucknorris.io/jokes/random";
  //costruisco un oggetto della classe HttpClient (importata) chiamato http
  constructor(private http: HttpClient) {}

  public getData(): Observable<Object>{
    return this.http.get(this.apiURL);
}
}
/*
export class ChuckService {
  apiKEY: string = '96af4532f05b220a34f6e04bd277f6ef'
  apiURL: string = 'https://api.weatherbit.io/v2.0/current';
  constructor(private http: HttpClient) { }

  public getData(CityName: string): Observable<Object> {
    return this.http.get(this.apiURL+'?key='+this.apiKEY+'&city='+CityName);
  }
}*/