import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.interface';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private tarefas: Tarefa[] = [];
  private nextId = 1;

  constructor() {}

  getTarefas(): Tarefa[] {
    return this.tarefas;
  }

  adicionar(nome: string) {
    if (!nome) return;

    const novaTarefa: Tarefa = {
      id: this.nextId++,
      nome,
      concluida: false,
    };
    this.tarefas.push(novaTarefa);
  }
  remover(id: number) {
    this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
  }
  marcarConcluida(id: number) {
    const tarefa = this.tarefas.find((tarefa) => tarefa.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }
}
