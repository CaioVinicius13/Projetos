import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User;
  email: string;
  password: string;

  constructor() { }

  loginUser() {
    this.newUser = new User()
    this.newUser.email = this.email;
    this.newUser.password = this.password;
    console.log(this.newUser.email);
    console.log(this.newUser.password);
    //manda pro service fazer a conexão com o back
  }

  ngOnInit() {
  }

}
