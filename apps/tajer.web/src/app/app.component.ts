import { Component } from '@angular/core';
import { RouteHelper } from '@tajer/core';

@Component({
  selector: 'tajer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TAJER';

  constructor(private _routeHelper: RouteHelper) {
    this._routeHelper.setupRouting();
  }
}
