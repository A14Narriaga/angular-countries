import { Component, OnInit } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { Country } from '../../interfaces/country.interface'

@Component({
	selector: 'app-countries',
	templateUrl: './countries.component.html',
	styleUrls: ['./countries.component.sass'],
})
export class CountriesComponent implements OnInit {
	term: string = ''
	countries: Country[] = []
	error: boolean = false
	errorMsj: string = ''

	constructor(private countriesService: CountriesService) {}

	ngOnInit(): void {}

	search = () => {
		if (this.term !== '') {
			this.error = false
			this.countriesService
				.searchCountries(this.term)
				.subscribe((countries) => {
					this.countries = countries
					console.log(countries)
					if (countries.length === 0) {
						this.errorMsj = `No matches found with ${this.term}.`
						this.error = true
					}
				})
		}
	}
}
