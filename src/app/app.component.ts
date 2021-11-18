import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <section class="container row mt-4">
    <div class="col-3">
      <app-sidenav></app-sidenav>
    </div>
    <div class="col">
      <h3>Countries</h3>
      <router-outlet></router-outlet>
    </div>
  </section>

  `,
  styleUrls: []
})
export class AppComponent {
  title = 'angular-countries';
}
