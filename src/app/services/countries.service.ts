import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { catchError, Observable, of } from 'rxjs'
import { Country } from '../interfaces/country.interface'

@Injectable({
  providedIn: 'root',
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1/'

  constructor(private httpClient: HttpClient) { }

  private get httpParams() {
    return new HttpParams()
      .set('fields', 'flags,name,population,capital,cca2,translations')
  }

  private getData(url: string, params: HttpParams = new HttpParams()): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(url, { params })
      .pipe(catchError((error) => of([])))
  }

  searchCountries = (term: string): Observable<Country[]> =>
    this.getData(`${this.apiUrl}name/${term}`, this.httpParams);

  searchCapitals = (term: string): Observable<Country[]> =>
    this.getData(`${this.apiUrl}capital/${term}`, this.httpParams);

  searchCountry = (term: string) =>
    this.getData(`${this.apiUrl}alpha/${term}`);

  searchRegions = (term: string): Observable<Country[]> =>
    this.getData(`${this.apiUrl}region/${term}`, this.httpParams);
}


