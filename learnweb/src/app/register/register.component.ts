import { Component, OnInit } from '@angular/core';
import { ValidationService } from './../control-messages/validation.service';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {    
     this.myForm = fb.group({ 
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],    
      'email': ['', [Validators.required, ValidationService.emailValidator]], 
      'password': ['', [Validators.required, ValidationService.passwordValidator]],
      'confirmPassword': ['', [Validators.required, ValidationService.passwordValidator]]  
    });  
  }

  ngOnInit() {
  }

  onRegister() {
     if (this.myForm.valid) {
      this.myForm.reset();
    }
  }
}
