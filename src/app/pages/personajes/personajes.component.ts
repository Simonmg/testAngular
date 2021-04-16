import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpServiceService } from '../../service/http-service.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit, OnChanges {

  houses = ['slytherin', 'gryffindor', 'ravenclaw','hufflepuff'];
  selected: any;
  public personajes: Array<any>;

  constructor(
    private apiService: HttpServiceService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    
  }

  load(event): void {
    console.log(event.source.value);
    this.apiService.get(
      this.apiService.domain 
      + this.apiService.modules.personajes 
      + event.source.value)
      .subscribe(async (data) => {
        console.log(data);
        this.personajes = await data;
      });
  }





}
