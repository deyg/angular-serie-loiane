import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponente } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponente,
    MeuPrimeiro2Component,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
