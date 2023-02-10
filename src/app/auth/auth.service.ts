import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {  

  constructor() { }

  public get isLogged() {
    return this.jwt != null
  }

  public get jwt(): string | null {
    return localStorage.getItem('jwt');
  }

}
