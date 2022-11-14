import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Countrie } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private apiURL: string = 'https://restcountries.com/v3.1'
  
  constructor(
    private http: HttpClient
  ) { }

  buscarPais(termino: string): Observable<Countrie[]> {
    const url = `${this.apiURL}/name/${termino}`;

    return this.http.get<Countrie[]>(url);

    // return this.http.get(url)
    // .pipe(
    //   catchError(err => of([]))
    // );

  }

  

}
