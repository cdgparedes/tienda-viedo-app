import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienbenido a angular';

  curso: string = 'Curso spring 5 con angular';
  profesor: string = 'Andres Guzmán'
}
