import { Component, signal } from '@angular/core';
import { Header } from './Components/header/header';
import { Main } from './Components/main/main';
@Component({
  selector: 'app-root',
  imports: [Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
