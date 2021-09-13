/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  constructor(public http: HttpClient, private a: AppComponent) { }

  datosFacturacion: any;
  facturaActual: number=-1;

  ngOnInit(): void {
    let resp = this.http.get("http://localhost:8080/users/"+this.a.userID+"/facturacion")
    resp.subscribe((data) => {this.datosFacturacion = data; this.facturaActual = this.datosFacturacion.length-1;})
  }

  avanzaMes(): void{
    if(this.facturaActual<this.datosFacturacion.length-1){
        this.facturaActual=this.facturaActual+1;
      }
  }
  retrocedeMes(): void{
    if(this.facturaActual>0){
        this.facturaActual=this.facturaActual-1;
    }
  }
  getMes(): number{
    return this.facturaActual;
  }
}
