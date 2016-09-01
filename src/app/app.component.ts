import { Component, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, SidebarComponent]
})

export class AppComponent {
  title = 'app works!';
 
}
