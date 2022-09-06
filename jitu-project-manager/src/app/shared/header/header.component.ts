import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  name: string;
  isLoggedIn: string;
  homeUrl: string;

  ngOnInit(): void {
    localStorage.removeItem('userInfo');

    setTimeout(() => {
      this.homeUrl = '/';
      this.name = this.authService.name;
      this.isLoggedIn = this.authService.isLoggedIn;
    }, 200);
  }

  logout() {
    this.isLoggedIn = this.authService.logout();
    this.router.navigate(['/']);
  }
}
