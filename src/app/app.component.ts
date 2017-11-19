import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RadiUP!';

  logged = localStorage.getItem('logged-in');
  username = localStorage.getItem('username');

}
