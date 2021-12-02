import { Country } from './../../../interfaces/country.interface';
import { Component } from '@angular/core'
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.sass'],
})

export class RegionsComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  currentRegion: string = ''
  countries: Country[] = []

  constructor(private countriesService: CountriesService) { }

  getCountries = (region: string) => {
    if (region === this.currentRegion) return
    this.currentRegion = region
    this.countries = []
    this.countriesService.searchRegions(region).subscribe((countries) => {
      this.countries = countries
    })
  }

}
