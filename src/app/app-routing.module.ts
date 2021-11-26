import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CountriesComponent } from './countries/containers/countries/countries.component'
import { RegionsComponent } from './countries/containers/regions/regions.component'
import { CapitalsComponent } from './countries/containers/capitals/capitals.component'
import { CountryComponent } from './countries/containers/country/country.component'

const routes: Routes = [
	{
		path: '',
		component: CountriesComponent,
		pathMatch: 'full',
	},
	{
		path: 'regions',
		component: RegionsComponent,
	},
	{
		path: 'capitals',
		component: CapitalsComponent,
	},
	{
		path: 'country/:id',
		component: CountryComponent,
	},
	{
		path: '**',
		redirectTo: '',
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
