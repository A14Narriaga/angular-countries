import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { switchMap, tap } from 'rxjs'
import { Country } from 'src/app/interfaces/country.interface'
import { CountriesService } from '../../../services/countries.service'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.sass'],
})
export class CountryComponent implements OnInit {
  country!: Country
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {
    // 	this.countriesService.searchCountry(id).subscribe((country) => {
    // 		console.log(country)
    // 	})
    // })
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountry(id)),
        // tap((data) => console.log('tap:', data))
      )
      .subscribe((data) => {
        // console.log('subs:', data)
        this.country = data[0]
      })
  }
}
