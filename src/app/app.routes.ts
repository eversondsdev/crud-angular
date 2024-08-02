import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFuncionarioComponent } from './components/add-funcionario/add-funcionario.component';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
export const routes: Routes = [
  { path: '', pathMatch: 'full', component: EmployeeListComponent },
  {
    path: 'adicionarfuncionario',
    component: AddFuncionarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
