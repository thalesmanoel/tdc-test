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
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    
    this.formulario = this.fb.group({
      titulo: ['', Validators.required],
      resumo: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulário enviado:', this.formulario.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
