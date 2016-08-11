import { Component } from '@angular/core';

import { ViewComponent } from './containers/view.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <view></view>
  `,
  directives: [ViewComponent]
})
export class AppComponent {
  title = 'app works!';
}
