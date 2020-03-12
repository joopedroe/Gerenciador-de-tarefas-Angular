import { Component } from '@angular/core';
import {Tarefa} from './models/Tarefa'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = null;
  tarefa: Tarefa = new Tarefa();
  tarefas: Tarefa[] = [
    {id:1,date:'06/05/20',title:"Atividade IA",status:false},
    {id:2,date:'03/05/20',title:"Atividade LPWEB",status:false},
    {id:3,date:'08/05/20',title:"Atividade SI",status:false},
    {id:4,date:'01/05/20',title:"Atividade DS",status:false}
  ];

  adicionar() {
    this.tarefas.push({id:1,date:'06/05/20',title:this.titulo,status:false});
    this.titulo = null;
  }

}
