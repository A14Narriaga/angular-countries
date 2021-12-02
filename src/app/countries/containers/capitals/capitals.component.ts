import { Component, OnInit } from '@angular/core'
import { Country } from 'src/app/interfaces/country.interface'
import { CountriesService } from 'src/app/services/countries.service'

@Component({
	selector: 'app-capitals',
	templateUrl: './capitals.component.html',
	styleUrls: ['./capitals.component.sass'],
})
export class CapitalsComponent implements OnInit {
	countries: Country[] = []
	error: boolean = false
	errorMsj: string = ''

	constructor(private countriesService: CountriesService) {}

	ngOnInit(): void {}

	search = (term: string) => {
		this.error = false
    this.countries = []
		this.countriesService.searchCapitals(term).subscribe((countries) => {
			this.countries = countries
			if (countries.length === 0) {
				this.errorMsj = `No matches found with ${term}.`
				this.error = true
			}
		})
	}
}
