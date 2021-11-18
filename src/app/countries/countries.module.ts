import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './pages/country/country.component';
import { RegionsComponent } from './pages/regions/regions.component';
import { CapitalsComponent } from './pages/capitals/capitals.component';
import { CountriesComponent } from './pages/countries/countries.component';


@NgModule({
  declarations: [
    CountryComponent,
    RegionsComponent,
    CapitalsComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountryComponent,
    RegionsComponent,
    CapitalsComponent,
    CountriesComponent
  ]
})
export class CountriesModule { }
