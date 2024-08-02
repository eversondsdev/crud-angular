import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFuncionarioComponent } from './components/add-funcionario/add-funcionario.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
export const routes: Routes = [
  { path: '', pathMatch: 'full', component: EmployeeListComponent },
  {
    path: 'adicionarfuncionario',
    component: AddEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
