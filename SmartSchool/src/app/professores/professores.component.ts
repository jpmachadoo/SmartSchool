import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  title = 'Professores';
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
