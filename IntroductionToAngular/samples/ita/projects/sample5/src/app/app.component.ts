import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample5';

  onDoSomething(event) {
    console.log('Main App Listener listener');
    console.log(`Text Passed as part of event: ${event}`);
  }
}
