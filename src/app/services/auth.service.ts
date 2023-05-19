import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../helpers/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:8085/api/auth';
  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    const URL = `${this.url}/login`;
    const body = {username, password};
    return this.http.post<any>(URL, body);
  }

  register(user: User){
    const URL = `${this.url}/register`;
    return this.http.post<any>(URL, user);
  }
}
