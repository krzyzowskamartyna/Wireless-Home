import { Injectable } from '@angular/core';
import { Detail } from './detail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class apiService {
  //formData: Detail;
  constructor(private http: HttpClient) { }

  apiBase: string = 'http://localhost:64874/api/DeviceDetail';

  getList(): Observable<Detail[]> {
    return this.http.get<Detail[]>(this.apiBase);
  }
}

