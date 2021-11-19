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

	searchCountries = (
		term: string
	): Observable<Country[]> => {
		const url = `${this.apiUrl}name/${term}`
		return this.httpClient
			.get<Country[]>(url)
			.pipe(catchError((error) => of([])))
	}
}
