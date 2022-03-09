import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Test Junior';
  count = 42;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
}
