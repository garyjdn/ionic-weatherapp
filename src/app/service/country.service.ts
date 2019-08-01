import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'X-RapidAPI-Host': 'restcountries-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'c4c75ed45fmshd1d3cd628abf44bp1995ecjsnb4460d78eb8d',
    })
  };

  constructor(private http: HttpClient) { }

  getAllCountry(): Observable<any> {
    return this.http.get('https://restcountries-v1.p.rapidapi.com/all', this.httpOptions);
  }
}
