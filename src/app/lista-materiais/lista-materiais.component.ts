import { Component, OnInit } from '@angular/core';
import { Material } from '../material';
import { MateriaisAPIService } from '../service/materiais-api.service';

@Component({
  selector: 'has-lista-materiais',
  templateUrl: './lista-materiais.component.html',
  styleUrls: ['./lista-materiais.component.css']
})
export class ListaMateriaisComponent implements OnInit {

  
  constructor(private service: MateriaisAPIService) { 



  }

  ngOnInit() {
    this.service
    .getClientes()
    .subscribe((data: Material[]) => this.materiais = data,
    error => console.log(error));
    }

  materiais : Material[];
  

}
