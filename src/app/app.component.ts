import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	template: `
		<section class="container">
			<div class="row mt-4">
				<div class="col-4">
					<app-sidenav></app-sidenav>
				</div>
				<div class="col">
					<router-outlet></router-outlet>
				</div>
			</div>
		</section>
	`,
	styles: [
		`
    .container
      width: 900px
  `,
	],
})
export class AppComponent {
	title = 'angular-countries'
}
