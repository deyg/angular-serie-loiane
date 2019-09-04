import { Injectable } from '@angular/core';
/* veja cursos.module.ts outra forma de prover o Service
* usando o metadados-> providers: [ CursosService ]
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular'];
  }

}
