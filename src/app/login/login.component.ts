import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = new User();
  

  constructor(private auth : AuthService, private route : Router) { }

  loginUser() {
    if(this.newUser.email === '' && this.newUser.password === ''){
    alert('Login e senha Invalidos')
    
    }else{
      console.log('Passou do primeiro if!')
      this.validateUser()

    }
  }
    validateUser(){
      if(this.auth.isValid(this.newUser)){
        console.log('é true!')
        this.route.navigate(['home']) 
      }else{
        alert('Login e senha Invalidos')
      }
  }
      
    //manda pro service fazer a conexão com o back
  

  ngOnInit() {
  }

}
