import { Component, inject, OnInit } from '@angular/core';
import { PropostaService } from '../../services/proposta.service';
import { Proposta } from '../../models/proposta';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {
proposta: Proposta = new Proposta()

lista: Proposta[] = [];
propostaService = inject(PropostaService);

listAll(){
  this.propostaService.listAll().subscribe({
    next: lista => {
      this.lista = lista;
      console.log(this.lista);
    },
    error: erro => {
      console.error('Erro ao buscar os dados:', erro);
      alert("Ocorreu algum erro!");
    },
  });
}

ngOnInit(){
  this.listAll();
}

}
