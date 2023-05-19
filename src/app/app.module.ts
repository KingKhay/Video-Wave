import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './pages/login/login.component';
import {InputComponent} from './components/input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {AuthButtonComponent} from './components/auth-button/auth-button.component';
import {HttpClientModule} from "@angular/common/http";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { RegisterComponent } from './pages/register/register.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    InputComponent,
    CheckboxComponent,
    AuthButtonComponent,
    RegisterComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
