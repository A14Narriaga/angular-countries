import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CountriesComponent } from './countries/pages/countries/countries.component'
import { RegionsComponent } from './countries/pages/regions/regions.component'
import { CapitalsComponent } from './countries/pages/capitals/capitals.component'
import { CountryComponent } from './countries/pages/country/country.component'
import { Error404Component } from './shared/error404/error404.component'

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
