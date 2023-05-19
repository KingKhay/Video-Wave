import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isloading: boolean = false;

  constructor(private fb: FormBuilder) {
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

  }
}
