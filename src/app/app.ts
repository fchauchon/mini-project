import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MiniProject');
  httpClient = inject(HttpClient);

  constructor() {
    this.httpClient.get('http://localhost:3000/users').subscribe((data) => {
      console.log(data);
    });
  }
}
