import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Main } from './Components/main/main';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
