import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'

import { CountryComponent } from './containers/country/country.component'
import { RegionsComponent } from './containers/regions/regions.component'
import { CapitalsComponent } from './containers/capitals/capitals.component'
import { CountriesComponent } from './containers/countries/countries.component'
import { RouterModule } from '@angular/router'
import { TableComponent } from './components/table/table.component'
import { InputTextComponent } from './components/input-text/input-text.component'

@NgModule({
	declarations: [
		CountryComponent,
		RegionsComponent,
		CapitalsComponent,
		CountriesComponent,
		TableComponent,
		InputTextComponent,
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
