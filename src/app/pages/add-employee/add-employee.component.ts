import { Component, OnInit } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { Funcionario, FuncionarioService } from '../../services/crud.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    CardModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    InputMaskModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  addEmployee!: FormGroup;

  funcionario: Funcionario[] = [];
  constructor() {
    this.addEmployee = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      telefone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
      ]),
      data_nascimento: new FormControl('', [Validators.required]),
      salario: new FormControl('', [Validators.required]),
    });
  }

  // Função Cadastrar
  cadastar() {
    this.funcionario.push(this.addEmployee.value as Funcionario);

    // Limpar os campos dos inputs
    this.addEmployee.reset();

    //console.table(this.funcionario);
  }
}
