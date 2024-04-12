import { Injectable, inject } from '@angular/core';
import { Report, User } from 'src/app/shared/interfaces/media';
import { AbstractService } from 'src/app/shared/services/abstract.service';
import { Observable, map } from 'rxjs';
import { Response } from '../../shared/models/response.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MarkingService extends AbstractService<User> {
  private httpClient = inject(HttpClient);
  private router = inject(Router);
  private toastr = inject(ToastrService);

  endpoints = {
    marking: () => 'marking',
  };

  createMarking(): Observable<Response<User>> {
    return this.create(this.endpoints.marking(), {});
  }

  getReport(): Observable<Report> {
    return this.findAll(this.endpoints.marking()).pipe(
      map((res: Response<Report>) => res.data as Report)
    );
  }

}
