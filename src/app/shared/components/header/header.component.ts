import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/media';
import { Response } from '../../models/response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {

  user$!: Observable<Response<User>>;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  buttons = [
  
    {
      alt: 'Marcar/Relatório',
      title: 'Marcar/Relatório',
      class: 'delete',
      action: () => this.router.navigate(['/marking']),
      permission: 2
    },
    {
      alt: 'Cadastrar usuário',
      title: 'Cadastrar usuário',
      class: 'delete',
      action: () => this.router.navigate(['/user']),
      permission: 1
    },
    {
      alt: 'Sair',
      title: 'Sair',
      class: 'delete',
      action: () => this.userService.revokeToken(),
      permission: 0
    },
  ];

 

  ngOnInit() {
    this.user$ = this.userService.userLogged();
  }

}
