import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {toastAlert} from "../../helpers/alert";
import {AuthService} from "../../services/auth.service";
import {User} from "../../helpers/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isloading: boolean = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
  }

  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required, Validators.minLength(8)],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    dob: ['', Validators.required]
  })

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    }
    else{
      this.isloading = true;
      let username = this.registerForm.value.username;
      let password = this.registerForm.value.password;
      let user: User = {
        username: this.registerForm.value.username!,
        password: this.registerForm.value.password!,
        firstName: this.registerForm.value.firstname!,
        lastName: this.registerForm.value.lastname!,
        email: this.registerForm.value.email!,
        dob: this.registerForm.value.dob!,
      }

      // Call the login service
      this.authService.register(user).subscribe({
        next: response => {
          console.log(response)
          // localStorage.setItem("token", response.jwt);
          toastAlert('success', 'Registered successfully')
          this.isloading = false;
        },
        error: error => {
          toastAlert('error', 'Registration failed')
          this.isloading = false;
        }
      });
    }
  }
}
