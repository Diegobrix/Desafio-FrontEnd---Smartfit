import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  results = [];
  formGroup!: FormGroup;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() : void
  {
    this.formGroup = this.formBuilder.group({
      desiredTime: "",
      showClosed: false
    });
  }

  onSubmit() : void
  {
    window.alert("Envialdo");
  } 

  onClear() : void
  {
    window.alert("Limpaldo");
  }
}
