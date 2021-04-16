import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(),
    escuela: new FormControl(),
    edad: new FormControl(),
    foto: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
