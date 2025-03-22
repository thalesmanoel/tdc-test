import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  titulo: string = '';
  resumo: string = '';
  nomeAutor: string = '';
  email: string = '';

  onSubmit() {
    if (!this.titulo || !this.resumo || !this.nomeAutor || !this.email) {
      alert("Dado incorreto ou campo vazio!");
    }
  }
}
