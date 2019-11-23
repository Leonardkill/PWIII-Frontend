import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Material } from '../material';
import {retry , catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MateriaisAPIService {
  apiURL : string = "http://localhost:8080/api/listagem";


 

  constructor(private httpClient: HttpClient) { }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    errorMessage = `Código de erro: ${error.status}\nMensagem: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    }

    getClientes(): Observable<Material[]> {
      return this.httpClient.get<Material[]>(this.apiURL)
      .pipe(retry(1),
      catchError(this.handleError))
      }

    
}



