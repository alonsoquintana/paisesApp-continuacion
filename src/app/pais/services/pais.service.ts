import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RESTCountries } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<RESTCountries[]> {

    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<RESTCountries[]>( url );
  }

}
