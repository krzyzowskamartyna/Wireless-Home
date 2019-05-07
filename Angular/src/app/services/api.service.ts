import { Injectable } from '@angular/core';
import { Detail } from './detail.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class apiService {
  //formData: Detail;
  constructor(private http: HttpClient) { }

  apiBase: string = 'http://localhost:64874/api/DeviceDetail';

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  getList(): Observable<Detail[]> {
    return this.http.get<Detail[]>(this.apiBase);
  }

  getDevice(id: number): Observable<Detail> {
    return this.http.get<Detail>(`${this.apiBase}/${id}`);
  }

  postDevice(data: Detail): Observable<Detail> {
    return this.http.post<Detail>(this.apiBase, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}

