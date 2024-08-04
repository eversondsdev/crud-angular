import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Define a estrutura de um funcionário.
export interface Funcionario {
  id: number;
  nome: string;
  telefone: string;
  data_nascimento: string;
  salario: number;
}
// Torna o serviço disponivel em toda aplicação.
@Injectable({
  providedIn: 'root',
})
// Dados fictícios dos funcionarios
export class FuncionarioService {
  private funcionarios: Funcionario[] = [
    {
      id: 1,
      nome: 'João Silva',
      telefone: '(11)987654321',
      data_nascimento: '1990-01-01',
      salario: 50000,
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      telefone: '(21)912345678',
      data_nascimento: '1985-05-15',
      salario: 3500,
    },
    {
      id: 3,
      nome: 'João Silva',
      telefone: '(11)987654321',
      data_nascimento: '1990-01-01',
      salario: 50000,
    },
    {
      id: 4,
      nome: 'Maria Oliveira',
      telefone: '(21)912345678',
      data_nascimento: '1985-05-15',
      salario: 3500,
    },
    {
      id: 5,
      nome: 'João Silva',
      telefone: '(11)987654321',
      data_nascimento: '1990-01-01',
      salario: 50000,
    },
    {
      id: 6,
      nome: 'Maria Oliveira',
      telefone: '(21)912345678',
      data_nascimento: '1985-05-15',
      salario: 3500,
    },
    {
      id: 7,
      nome: 'João Silva',
      telefone: '(11)987654321',
      data_nascimento: '1990-01-01',
      salario: 50000,
    },
    {
      id: 8,
      nome: 'Maria Oliveira',
      telefone: '(21)912345678',
      data_nascimento: '1985-05-15',
      salario: 3500,
    },
    {
      id: 9,
      nome: 'João Silva',
      telefone: '(11)987654321',
      data_nascimento: '1990-01-01',
      salario: 50000,
    },
    {
      id: 10,
      nome: 'Maria Oliveira',
      telefone: '(21)912345678',
      data_nascimento: '1985-05-15',
      salario: 3500,
    },
  ];
  private proximoId = this.funcionarios.length + 1;
  constructor() {}
  // Médoto para obter a lista, e retorna um Observable.
  // Observable emite os dados de forma assincrona.
  getFuncionarios(): Observable<Funcionario[]> {
    return of(this.funcionarios);
  }
  getFuncionario(id: number): Observable<Funcionario | undefined> {
    return of(this.funcionarios.find((funcionario) => funcionario.id === id));
  }

  adicionarFuncionario(funcionario: Funcionario): void {
    funcionario.id = this.proximoId++;
    this.funcionarios.push(funcionario);
  }

  atualizarFuncionario(atualizaFuncionario: Funcionario): void {
    const index = this.funcionarios.findIndex(
      (funcionario) => funcionario.id === atualizaFuncionario.id
    );
    if (index !== -1) {
      this.funcionarios[index] = atualizaFuncionario;
    }
  }

  deletarFuncionario(id: number): void {
    this.funcionarios = this.funcionarios.filter(
      (funcionario) => funcionario.id !== id
    );
  }
}
