import { Component, OnInit } from '@angular/core';
import { Countrie } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;

  paises: Countrie[]=[];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }


  buscar(termino: string){
    this.hayError = false;
    this.termino=termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe((paises)=>{
      this.paises=paises;
      // console.log(paises);
    },(err)=>{
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
      
  }
}
