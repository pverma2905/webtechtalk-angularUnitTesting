import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularUnitTestApp';
  btnText = 'Subscribe';
  isSubscribed = false;
  marks = [97, 68, 83, 29, 75];
  mark: any;

  subscribe() {
    setTimeout(() => {
      this.isSubscribed = true;
      this.btnText = "Subscribed";
    }, 3000)

  }
}
