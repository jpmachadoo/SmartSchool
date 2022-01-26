import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  professores = [
    { nome: "Carlos" },
    { nome: "Maria Regina" },
    { nome: "José" },
    { nome: "Eunice" },
  ]
  constructor() { }

  ngOnInit() {
  }

}
