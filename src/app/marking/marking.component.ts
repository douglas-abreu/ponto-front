import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from '../shared/components/header-home/header-home.component';
import { MarkingService } from '../shared/services/marking.service';
import { Observable, concat, switchMap, tap } from 'rxjs';
import { Marking, Report } from '../shared/interfaces/media';
import { Response } from '../shared/models/response.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  selector: 'app-marking',
  templateUrl: './marking.component.html',
  styleUrls: ['./marking.component.sass'],
  imports: [
    HeaderHomeComponent,
    CommonModule
  ]
})

export class MarkingComponent {

  report$!: Observable<Report>;
  constructor(
    private markingService: MarkingService,
    private toastr: ToastrService
  ) {}

  ngOnInit(){
    this.getReport();
  }

  getReport(){
    this.report$ = this.markingService.getReport()
  }

  createMarking(){ 
    this.markingService.createMarking().subscribe({
        next: (res: Response<Marking>) => {
        let marking = res.data;
        let message = res.message!;
        this.toastr.success(message);
      },
      error: (res: any) => {
        if (res.error.message)
          this.toastr.error(res.error.message, "Erro!");
        else
          this.toastr.warning("Tente novamente mais tarde!", "Algo deu errado...");
      }
    })
    setTimeout(() => {
      this.getReport();
    }, 100);
  }
}

