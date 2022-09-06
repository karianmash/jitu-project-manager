import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  @ViewChild('form') loginForm: NgForm;

  user: User = {
    email: '',
    password: '',
  };

  wrongCredentials: boolean = false;

  ngOnInit(): void {}

  // handle form submission
  onFormSubmit() {
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;

    this.loginUser(this.user);
  }

  // Login user
  loginUser(user: User) {
    this.authService.loginUser(user).subscribe({
      // Handle data
      next: (data) => {
        localStorage.setItem('userInfo', JSON.stringify(data));
        this.authService.setLoginStatus('true');

        if (data.user.role === 'user') {
          this.router.navigate(['/admin']);
        } else if (data.user.role === 'admin') {
          this.router.navigate(['/admin']);
        }
      },
      // Catch errors
      error: (error) => {
        console.log(error.status);
        this.wrongCredentials = true;
      },
      complete: () => console.log('Complete loading the data...'),
    });
  }
}
