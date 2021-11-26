import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, of } from 'rxjs'
import { Country } from '../interfaces/country.interface'

@Injectable({
	providedIn: 'root',
})
export class CountriesService {
	private apiUrl: string = 'https://restcountries.com/v3.1/'

	constructor(private httpClient: HttpClient) {}

	searchCountries = (term: string): Observable<Country[]> =>
		this.httpClient
			.get<Country[]>(`${this.apiUrl}name/${term}`)
			.pipe(catchError((error) => of([])))

	searchCapitals = (term: string): Observable<Country[]> =>
		this.httpClient
			.get<Country[]>(`${this.apiUrl}capital/${term}`)
			.pipe(catchError((error) => of([])))

	searchCountry = (term: string) =>
		this.httpClient
			.get<Country[]>(`${this.apiUrl}alpha/${term}`)
			.pipe(catchError((error) => of([])))
}
