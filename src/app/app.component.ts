import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddFuncionarioComponent } from './components/add-funcionario/add-funcionario.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddFuncionarioComponent, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-crud';
}
