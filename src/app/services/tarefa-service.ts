import { Injectable } from '@angular/core';
import {Tarefa} from './tarefa.interface';


@Injectable({
  providedIn: 'root'
})

export class TarefaService {

   private tarefas: Tarefa[] = [];
   private nextId = 1;
 
   constructor() {}

  getTarefas(): Tarefa[]{
  return this.tarefas;
  }

  adicionarLista(nome: string){
    if(!nome ) return;

    const novaTarefa = {

    }

  }
  removerLista(){

  }



  prazoDeConclusao(){

  } 

  marcarConcluida(){

  }




}


