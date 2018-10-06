import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : Array<User> = [
    {nome : 'Caio', email: 'adm@adm', password:'12345'}
  ]






  constructor() { }
  isValid(user : User){

  }
}
