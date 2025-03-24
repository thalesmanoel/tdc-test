import { PropostaService } from './../../services/proposta.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})

export class PrincipalComponent {

  form: FormGroup;
  propostaService = inject(PropostaService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      summary: ['', Validators.required],
      authorName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.form.invalid) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    this.propostaService.save(this.form.value).subscribe({
      next: () => {
        alert("Proposta enviada com sucesso!");
        this.form.reset();
      },
      error: (error) => {
        alert("Erro ao enviar proposta: " + error.message);
      }
    });
  }
}


