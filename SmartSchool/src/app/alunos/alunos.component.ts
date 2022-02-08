import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public alunoSelecionado = '';
  alunos = [
    { id: 1, nome: 'Joao', sobrenome: 'Machado', telefone: '4223-3222' },
    { id: 2, nome: 'Carla', sobrenome: 'Moreira', telefone: '2311-9182' },
    { id: 3, nome: 'Felipe', sobrenome: 'Sobral', telefone: '8672-4220' },
    { id: 4, nome: 'Marcos', sobrenome: 'Maciel', telefone: '9091-6325' },
    { id: 5, nome: 'Jaqueline', sobrenome: 'Mendes', telefone: '6155-9991' },
    { id: 6, nome: 'Vinicius', sobrenome: 'Castro', telefone: '7345-2114' },
    { id: 7, nome: 'Marcela', sobrenome: 'Silva', telefone: '9155-1029' }
  ];

  alunoSelect(aluno:any) {
    this.alunoSelecionado = aluno.nome;
  }

  voltar() {
    this.alunoSelecionado = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
