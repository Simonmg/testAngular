import { Component, OnInit, Input, OnChanges} from '@angular/core';
import {Observable} from 'rxjs';

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
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, OnChanges {

  @Input() dataArray: Person[];

  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  dataSource: Person[];

  constructor() {}

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    console.log(this.dataArray);
    this.dataSource = this.dataArray;
  }

  
 

}
