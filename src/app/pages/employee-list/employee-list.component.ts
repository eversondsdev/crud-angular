import { Component, OnInit } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { ActionButtonsComponent } from '../../components/action-buttons/action-buttons.component';
import { TableModule, TablePageEvent } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

import { AddButtonComponent } from '../../components/add-button/add-button.component';
import { Funcionario, FuncionarioService } from '../../services/crud.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Router } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    ActionButtonsComponent,
    TableModule,
    PaginatorModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    AddEmployeeComponent,
    AddButtonComponent,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService, DatePipe, CurrencyPipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit {
  //metodo para mudar de pagina.
  paginacao($event: TablePageEvent) {
    throw new Error('Não implementado');
  }
  funcionarios: Funcionario[] = [];
  page: number = 1;
  pageSize: number = 5;

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe
  ) {}
  //metodo de ciclo de vida.
  ngOnInit(): void {
    this.carregarFuncionarios(); // carrega os dados ao iniciar a aplicação.
  }
  // Formata a data
  getFormatarData(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
  // Formata o salario.
  getFormatarSalario(salario: number): string {
    return this.currencyPipe.transform(salario, 'R$ ', 'symbol', '1.2-2') || '';
  }
  // Função que pega os dados do servico.
  carregarFuncionarios(): void {
    this.funcionarioService.getFuncionarios().subscribe((data) => {
      this.funcionarios = data;
    });
  }

  deletarFuncionario(id: number): void {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja excluir este funcionário?',
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Excluir',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.funcionarioService.deletarFuncionario(id);
        this.carregarFuncionarios();
      },
    });
  }

  editarFuncionario(id: number): void {
    this.router.navigate(['/adicionarfuncionario', id]);
  }
}
