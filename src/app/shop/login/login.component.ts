import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from 'src/app/model/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private restService:RestService){}
  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.minLength(5)]),
    password: new FormControl("",[Validators.required, Validators.minLength(5)])
  })
  userLogin(){
    const register ={
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.restService.getLogin(register.email!, register.password!).subscribe(response => {
      response
    })
  }
}
