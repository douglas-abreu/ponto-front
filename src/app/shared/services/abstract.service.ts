import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Response } from './../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class AbstractService<T> {
  private http = inject(HttpClient);

  protected findAll(endpoint: string, params?: any): Observable<Response<T>> {
    return this.http.get<Response<T> | any>(`${environment.api}${endpoint}`, {
      params,
    });
  }

  protected create(
    endpoint: string,
    resource: Partial<T>
  ): Observable<Response<T>> {
    return this.http.post<Response<T>>(
      `${environment.api}${endpoint}`,
      resource
    );
  }
  
}
