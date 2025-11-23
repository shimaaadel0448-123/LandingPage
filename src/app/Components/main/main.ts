import { Component } from '@angular/core';
import { Header } from '../header/header';
import { SideBar } from '../side-bar/side-bar';
import { Content } from '../content/content';

@Component({
  selector: 'app-main',
  imports: [Header,SideBar,Content],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
