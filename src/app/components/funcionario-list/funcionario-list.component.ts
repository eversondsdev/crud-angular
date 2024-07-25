import { Component, OnInit } from '@angular/core';
import { TableModule, TablePageEvent } from 'primeng/table';

import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

import { Funcionario, FuncionarioService } from '../../services/crud.service';
import { AddFuncionarioComponent } from '../add-funcionario/add-funcionario.component';
import { AddButtonComponent } from '../add-button/add-button.component';

@Component({
  selector: 'app-funcionario-list',
  standalone: true,
  imports: [
    TableModule,
    PaginatorModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    AddFuncionarioComponent,
    AddButtonComponent,
  ],
  templateUrl: './funcionario-list.component.html',
  styleUrl: './funcionario-list.component.css',
})
export class FuncionarioListComponent implements OnInit {
  //metodo para mudar de pagina.
  paginacao($event: TablePageEvent) {
    throw new Error('Não implementado');
  }
  funcionarios: Funcionario[] = [];
  page: number = 1;
  pageSize: number = 5;

  constructor(private funcionarioService: FuncionarioService) {}
  //metodo de ciclo de vida.
  ngOnInit(): void {
    this.carregarFuncionarios(); // carrega os dados ao iniciar a aplicação.
  }

  // Função que pega os dados do servico.
  carregarFuncionarios(): void {
    this.funcionarioService.getFuncionarios().subscribe((data) => {
      this.funcionarios = data;
    });
  }
}
