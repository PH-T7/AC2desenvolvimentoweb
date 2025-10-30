import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefa-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-tarefa.html',
  styleUrl: './cadastrar-tarefa.css',
})
export class CadastrarTarefaComponent {
  nomeTarefa: string = '';

  constructor(private tarefaService: TarefaService) {}

  cadastrarTarefa() {
    this.tarefaService.adicionar(this.nomeTarefa);
    this.nomeTarefa = '';
  }
}
