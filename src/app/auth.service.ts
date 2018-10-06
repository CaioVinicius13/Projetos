import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { element } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : Array<User> = [
    {nome : 'Caio', email: 'adm@adm', password:'12345'}
  ]






  constructor() { }
  isValid(user : User): boolean{
    console.log('Chegou no Auto')
    this.user.forEach( (element)=>{
      if(element.email === user.email && element.password === user.password){
        return true
      }
    })
    return false;
  }
}
