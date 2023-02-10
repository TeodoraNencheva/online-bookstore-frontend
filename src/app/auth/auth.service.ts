import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLogged = false;
  private _jwt: string = '';

  constructor() { }

  public get isLogged() {
    return this._isLogged;
  }

  public set isLogged(value: boolean) {
    this._isLogged = value;
  }

  public get jwt() {
    return this._jwt;
  }

  public set jwt(value: string) {
    this._jwt = value;
  }


}
