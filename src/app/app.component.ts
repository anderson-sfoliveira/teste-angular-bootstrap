import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ultimoId = 0;
  nome = '';
  adicionado = false;
  funcionarios = [];

  adicionar(nome : string) {
    console.log(nome);

    this.nome = nome + " - adicionado";
    this.adicionado = true;
    
    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }
}