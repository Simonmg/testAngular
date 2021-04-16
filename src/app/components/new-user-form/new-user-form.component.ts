import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { PersonajesComponent } from 'src/app/pages/personajes/personajes.component';

export interface Person {
  actor: string
  alive: boolean
  ancestry: string
  dateOfBirth: string
  eyeColour: string
  gender: string
  hairColour: string
  hogwartsStaff: boolean
  hogwartsStudent: boolean
  house: string
  image: string
  name: string
  patronus: string
  species: string
}

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  public candidatos: Array<any> = [];

  form = new FormGroup({
    name: new FormControl(),
    patronus: new FormControl(),
    age: new FormControl(),
    image: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
    this.candidatos.push(this.form.value);
    localStorage.setItem('candidatos', JSON.stringify(this.candidatos));
    console.log(JSON.parse(localStorage.getItem('candidatos')))
  }

}
