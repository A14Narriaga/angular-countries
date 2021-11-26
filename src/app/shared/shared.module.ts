import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SidenavComponent } from './sidenav/sidenav.component'
import { Error404Component } from './error404/error404.component'
import { ErrorComponent } from './error/error.component'
import { LoadingComponent } from './loading/loading.component'

@NgModule({
	declarations: [
		SidenavComponent,
		Error404Component,
		ErrorComponent,
		LoadingComponent,
	],
	imports: [CommonModule, RouterModule],
	exports: [
		SidenavComponent,
		Error404Component,
		ErrorComponent,
		LoadingComponent,
	],
})
export class SharedModule {}
