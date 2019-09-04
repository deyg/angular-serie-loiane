import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  interpolation = '\<img src\=\"\{\{ urlImagem \}\}\"\>';
  propertyBinding = '\<img \[src\] \= \"urlImagem\"\>';

  // function getValor() em TS
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
