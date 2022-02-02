import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  professores = [
    { id: 1, nome: 'Carlos', disciplina: 'Matemática' },
    { id: 2, nome: 'Maria Regina', disciplina: 'Física' },
    { id: 3, nome: 'José', disciplina: 'Geografia' },
    { id: 4, nome: 'Eunice', disciplina: 'Inglês' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
