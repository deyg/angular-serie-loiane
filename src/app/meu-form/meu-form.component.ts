import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome = 'abc';

  pessoa: any = {
    nome: 'Osvaldo de Andrade',
    idade: '97',
    endereco: {
      bairro: 'Central da Estatistica',
      cep: '40127-270'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
