import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  reactiveRegisterForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // You can pass some default values by passing them to FormControl constructor
    this.reactiveRegisterForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  // Create
  onSubmit() {
    let user = {
      user_name: this.reactiveRegisterForm.value.username,
      email: this.reactiveRegisterForm.value.email,
      password: this.reactiveRegisterForm.value.password,
    };

    this.reactiveRegisterForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });

    this.authService.createUser(user);

    this.router.navigate(['/login']);
  }
}
