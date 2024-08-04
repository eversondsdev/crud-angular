import { Component, OnInit } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Funcionario, FuncionarioService } from '../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

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
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  addEmployee!: FormGroup;
  funcionarioIdAtual: number | null = null;

  constructor(
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {
    this.addEmployee = this.fb.group({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      telefone: new FormControl('', [Validators.required]),
      data_nascimento: new FormControl('', [Validators.required]),
      salario: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.funcionarioIdAtual = +params['id'];
        this.funcionarioService
          .getFuncionario(this.funcionarioIdAtual)
          .subscribe((funcionario) => {
            if (funcionario) {
              this.addEmployee.patchValue(funcionario);
            }
          });
      }
    });
  }

  onSubmit(): void {
    if (this.addEmployee.valid) {
      const funcionario: Funcionario = {
        ...this.addEmployee.value,
        id: this.funcionarioIdAtual,
      };
      if (this.funcionarioIdAtual) {
        // Atualiza funcionário existente
        this.funcionarioService.atualizarFuncionario(funcionario);
      } else {
        // Adiciona novo funcionário
        this.funcionarioService.adicionarFuncionario(funcionario);
      }
      // Redirecionar para a lista de funcionários
      this.router.navigate(['/']);
    }
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
