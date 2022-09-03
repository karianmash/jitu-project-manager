import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  name: string = 'Karian Mash';
  isLoggedIn: string;

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getLogInStatus();
  }

  logout() {
    this.isLoggedIn = this.authService.logout();
  }
}
