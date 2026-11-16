import { Component } from '@angular/core';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Friends } from './friends/friends';
import { Notifications } from './notifications/notifications';
import { Profil } from './profil/profil';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, Friends, Notifications, Profil, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}