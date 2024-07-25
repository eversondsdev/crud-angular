import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFuncionarioComponent } from './components/add-funcionario/add-funcionario.component';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
export const routes: Routes = [
  { path: '', pathMatch: 'full', component: FuncionarioListComponent },
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
