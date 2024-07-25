import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-funcionario',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    InputMaskModule,
    ButtonModule,
  ],
  templateUrl: './add-funcionario.component.html',
  styleUrl: './add-funcionario.component.css',
})
export class AddFuncionarioComponent {}
