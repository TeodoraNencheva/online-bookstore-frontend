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
    return sessionStorage.getItem('jwt');
  }

  public get isAdmin(): boolean {
    return sessionStorage.getItem('role') == 'admin';
  }

}
