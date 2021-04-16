import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../service/http-service.service';
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  public estudiantes: Array<any>;
  public candidatos: Array<any>;
  constructor(
    private apiService: HttpServiceService
  ) { }

  ngOnInit(): void {
    this.apiService.get(this.apiService.domain + this.apiService.modules.estudiantes)
      .subscribe(async (data) => {
        this.estudiantes = await data;
      });
    this.candidatos = JSON.parse(localStorage.getItem('candidatos'));
  }

  loadList($event) {
    this.candidatos = JSON.parse(localStorage.getItem('candidatos'));
  }

}
