import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';
  alunos = [
    { nome: 'Joao' },
    { nome: 'Medina' },
    { nome: 'Luis Felipe' },
    { nome: 'Giovanna' },
    { nome: 'Airton' },
    { nome: 'Vinicius' },
    { nome: 'Marcela' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
