import { Component, Input, OnInit } from '@angular/core';
import { Countrie } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Countrie[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
