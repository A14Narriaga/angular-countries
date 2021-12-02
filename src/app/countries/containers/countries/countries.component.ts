import { Component, OnInit } from '@angular/core'
import { CountriesService } from '../../../services/countries.service'
import { Country } from '../../../interfaces/country.interface'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.sass'],
})
export class CountriesComponent implements OnInit {
  countries: Country[] = []
  suggestions: Country[] = []
  error: boolean = false
  errorMsj: string = ''

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void { }

  search = (term: string) => {
    this.error = false
    this.countries = []
    this.countriesService.searchCountries(term)
      .subscribe((data) => {
        this.countries = data
        if (data.length === 0) {
          this.errorMsj = `No matches found with ${term}.`
          this.error = true
        }
      })
  }

  showSugestions = (term: string) => {
    this.error = false
    this.countriesService.searchCountries(term)
      .subscribe(data => this.suggestions = data.splice(0, 5))
  }
}
