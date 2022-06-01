import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formCliente!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      tipo: new FormControl(cliente.tipo),
      genero: new FormControl(cliente.genero),
      dataNascimento: new FormControl(cliente.dataNascimento),
      observacao: new FormControl(cliente.observacao),
      inativo: new FormControl(cliente.inativo)
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCliente.value);
   
     // chamando a função createForm para limpar os campos na tela
     this.createForm(new Cliente());
   }
 
}
