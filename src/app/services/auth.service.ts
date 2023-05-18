import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:8085/api/auth';
  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    const URL = `${this.url}/login`;
    const body = {username, password};
    return this.http.post(URL, body);
  }
}
