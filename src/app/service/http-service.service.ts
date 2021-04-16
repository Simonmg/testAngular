import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  public domain = 'http://hp-api.herokuapp.com/api/characters/'
  public modules = {
    personajes: 'house/',
    estudiantes: 'students',
    profesores: 'staff'
  }

  constructor(
    private http: HttpClient
  ) { }

  get(url, headers = {}): Observable<any> {
    return this.http.get(url, headers)
    .pipe(catchError(async error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
  }
}
