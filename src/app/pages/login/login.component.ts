import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import Swal from "sweetalert2";
import {toastAlert} from "../../helpers/alert";

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
          console.log(response)
          localStorage.setItem("token", response.jwt);
          toastAlert('success', 'login successful')
          this.isloading = false;
        },
        error: error => {
          toastAlert('error', 'login failed')
          this.isloading = false;
        }
      });
    }
  }
}
