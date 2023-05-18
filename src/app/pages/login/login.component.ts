import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isloading: boolean = false;


  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  ngOnInit(): void {

  }


  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    }
    else{
      this.isloading = true;
      let username = this.loginForm.value.username;
      let password = this.loginForm.value.password;

      // Call the login service
      this.authService.login(username!,password!).subscribe({
        next: response => {
          localStorage.setItem("token", response.jwt);
          this.isloading = false;
        },
        error: error => {
          console.log('login failed', error);
          this.isloading = false;
        }
      });
    }
  }
}
