import { Component, OnInit } from '@angular/core';

export interface FacturacionElement {
  fecha: string;
  serie: string;
  episodio: string;
  precio: number;
}

const FACTURACION_DATA: FacturacionElement[] = [
  {fecha: '01/03/2020', serie: 'The Boys', episodio: '1x01', precio: 0.75},
  {fecha: '02/03/2020', serie: 'The Boys', episodio: '1x02', precio: 0.75},
  {fecha: '02/03/2020', serie: 'The Boys', episodio: '1x03', precio: 0.75},
  {fecha: '13/03/2020', serie: 'The Boys', episodio: '1x04', precio: 0.75},
];

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'serie', 'episodio', 'precio'];
  dataSource = FACTURACION_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
