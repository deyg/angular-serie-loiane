import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'] // ,
  // css in-line com template literals
  /*
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
  */

})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  interpolation = '\<img src\=\"\{\{ urlImagem \}\}\"\>';
  propertyBinding = '\<img \[src\] \= \"urlImagem\"\>';

  valorAtual = '';
  valorSalvo = '';

  isMouseOver = false;

  nomeDoCurso = 'Angular';


  // function getValor() em TS
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    // Para acessar o value informamos ao angular que
    // o elemento é do tipo: HtmlInputElement.

    const castAs = (evento.target as HTMLInputElement).value;
    const castHtmlInputElement = (<HTMLInputElement> evento.target).value;

    console.log('as: '.concat(castAs).concat(
    ' e <HtmlInputElement>: '.concat(castHtmlInputElement)));

    // informa ao Angular que o elemento é do tipo
    // HtmlInputElement para ter acesso a suas propriedades
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
