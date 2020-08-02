import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-pipes',
  templateUrl: './teste-pipes.component.html',
  styleUrls: ['./teste-pipes.component.css']
})
export class TestePipesComponent {

  nome = 'Anderson Oliveira';
  dataAniversario = new Date(1989, 10, 24);
  preco = 12000.57;
  troco = 0.15842;

}
