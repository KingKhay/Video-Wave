import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {toastAlert} from "../../helpers/alert";
import {AuthService} from "../../services/auth.service";
import {User} from "../../helpers/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isloading: boolean = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    dob: ['',]
  })

  onRegister() {
    console.log('button clicked')
    if (this.registerForm.invalid) {
      console.log('invalid form')
      this.registerForm.markAllAsTouched();
    }
    else{
      console.log('valid form')
      this.isloading = true;
      let user: User = {
        username: this.registerForm.value.username!,
        password: this.registerForm.value.password!,
        firstName: this.registerForm.value.firstname!,
        lastName: this.registerForm.value.lastname!,
        email: this.registerForm.value.email!,
        dob: "1998-01-01",
      }
      console.log(user)

      this.authService.register(user).subscribe({
        next: response => {
          console.log(response)
          toastAlert('success', 'Registered successfully')
          this.isloading = false;
          this.router.navigateByUrl('/login').then(r => console.log(r));

        },
        error: error => {
          console.log(error)
          toastAlert('error', 'Registration failed')
          this.isloading = false;
        }
      });
    }
  }
}
