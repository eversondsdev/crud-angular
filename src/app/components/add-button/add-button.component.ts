import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css',
})
export class AddButtonComponent {
  constructor(private router: Router) {}

  navigateToPage() {
    this.router.navigate(['/adicionarfuncionario']);
  }
}
