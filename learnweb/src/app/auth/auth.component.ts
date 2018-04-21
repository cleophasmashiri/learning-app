import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { ValidationService } from './../control-messages/validation.service';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Credential } from "./credential";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  myForm: FormGroup;
  private errorMessage: string;
  

  constructor(private credential: Credential, private fb: FormBuilder, private authService: AuthService) {    
     this.myForm = fb.group({  
      'email': ['', [Validators.required, ValidationService.emailValidator]], 
      'password': ['', [Validators.required, Validators.minLength(8)]] 
    });  
  }

  ngOnInit() {
  }

  onLogin() {
    this.authService.auth(this.credential)
     .subscribe(
      res => res,
      error => this.errorMessage = <any>error 
    )
  }

}
