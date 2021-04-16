import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../service/http-service.service'; 
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  public profesores: Array<any>;
  constructor(
    private apiService: HttpServiceService
  ) { }

  ngOnInit(): void {
    this.apiService.get(this.apiService.domain + this.apiService.modules.profesores)
      .subscribe(async (data) => {
        this.profesores = await data;
      })
  }

}
