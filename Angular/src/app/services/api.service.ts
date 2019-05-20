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
  constructor(private http: HttpClient) { }

  apiBase: string = 'http://localhost:64874/api/DeviceDetail';

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      throwError(error.error.message);
    } else {
      throwError(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    if (error.status == 400) {
      return throwError(
        alert('Invalid data! Please try again.')
      );
    }
    return throwError(
      console.log('warning')
      // alert('Something bad happened; please try again later.')
    );
  };

  getList(): Observable<Detail[]> {
    return this.http.get<Detail[]>(this.apiBase);
  }

  getDevice(id: number): Observable<Detail> {
    return this.http.get<Detail>(`${this.apiBase}/${id}`);
  }

  postDevice(data: Detail): Observable<Detail> {
    return this.http.post<Detail>(this.apiBase, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteDevice(id: number): Observable<Detail> {
    return this.http.delete<Detail>(this.apiBase + '/' + id)
  }
  editDevice(id: number, data: Detail): Observable<Detail> {
    return this.http.put<Detail>(this.apiBase + '/' + id, data)
  }
}

