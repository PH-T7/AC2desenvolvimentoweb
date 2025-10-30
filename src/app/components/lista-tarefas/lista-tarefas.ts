import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefa-service';
import { Tarefa } from '../../services/tarefa.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css',
})
export class ListaTarefasComponent {
  constructor(public tarefaService: TarefaService) {}

  get tarefas(): Tarefa[] {
    return this.tarefaService.getTarefas();
  }

  remover(id: number) {
    this.tarefaService.remover(id);
  }

  concluir(id: number) {
    this.tarefaService.marcarConcluida(id);
  }
}
