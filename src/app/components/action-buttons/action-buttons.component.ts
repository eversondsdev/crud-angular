import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { EmployeeListComponent } from '../../pages/employee-list/employee-list.component';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [ButtonModule, EmployeeListComponent],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.css',
})
export class ActionButtonsComponent {
  @Input() funcionarioId!: number;
  @Output() editar = new EventEmitter<number>();
  @Output() deletar = new EventEmitter<number>();

  editarFuncionario(): void {
    this.editar.emit(this.funcionarioId);
    console.log(this.editar);
  }

  deletarFuncionario(): void {
    this.deletar.emit(this.funcionarioId);
    console.log(this.editar);
  }
}
