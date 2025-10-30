import { Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './components/cadastrar-tarefa/cadastrar-tarefa';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas';

export const routes: Routes = [
  { path: 'cadastro', component: CadastrarTarefaComponent },
  { path: 'lista', component: ListaTarefasComponent },
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' }, // Rota padrão
];
