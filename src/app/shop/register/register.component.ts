import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/model/rest.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private restService:RestService){}
  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.minLength(5)]),
    password: new FormControl("",[Validators.required, Validators.minLength(5)])
  })
  userAdd(){
    const register ={
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };
    this.restService.getAuths(register.email!, register.password!).subscribe(response => {
      response
    })
  }
}
