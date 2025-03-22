import { PropostaService } from './../../services/proposta.service';
import { Component, inject } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Proposta } from '../../models/proposta';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  proposta: Proposta = new Proposta();
  propostaService = inject(PropostaService);
  router = inject(Router);

  submit() {
    if (!this.proposta.titulo || !this.proposta.resumo || !this.proposta.nomeAutor || !this.proposta.email) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    this.propostaService.save(this.proposta).subscribe({
      next: (resposta) => {
        alert("Proposta enviada com sucesso!");
        this.proposta = new Proposta(); 
      },
      error: (error) => {
        alert("Erro ao enviar proposta: " + error.message);
      }
    });
  }
}


