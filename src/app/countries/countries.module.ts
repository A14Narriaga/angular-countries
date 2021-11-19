import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'

import { CountryComponent } from './pages/country/country.component'
import { RegionsComponent } from './pages/regions/regions.component'
import { CapitalsComponent } from './pages/capitals/capitals.component'
import { CountriesComponent } from './pages/countries/countries.component'
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		CountryComponent,
		RegionsComponent,
		CapitalsComponent,
		CountriesComponent,
	],
	imports: [CommonModule, SharedModule, FormsModule, RouterModule],
	exports: [
		CountryComponent,
		RegionsComponent,
		CapitalsComponent,
		CountriesComponent,
	],
})
export class CountriesModule {}