import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'control-messages',
   template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`,
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent implements OnInit {

  @Input() control: FormControl;
  @Input() compare: FormControl;
  constructor() { }

  ngOnInit() {
  }

    get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}
