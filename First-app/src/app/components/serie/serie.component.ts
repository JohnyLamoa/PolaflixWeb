import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})


export class SerieComponent implements OnInit {

  constructor(private http: HttpClient, private a: AppComponent, private router: Router) { }
    series: any
    seriesComenzadas: any

    ngOnInit(): void {
      let resp = this.http.get("http://localhost:8080/series/")
      resp.subscribe((data) => this.series = data)
    }

    visualizaCapitulo(serieID: number, numTemporada: number, numCapitulo: number): void{
      const headers = { 'content-type': 'application/json' }
      let resp = this.http.post("http://localhost:8080/users/" + this.a.userID + "/series/" + serieID + "/visualizar?numTemporada=" + numTemporada + "&numCapitulo=" + numCapitulo, { 'headers': headers })
    }

    addToPendientes(serieID: string): void{
      const headers = { 'content-type': 'application/json' }
      let resp = this.http.post("http://localhost:8080/users/" + this.a.userID + "/series/" + serieID + "/anhadePendiente", { 'headers': headers })
    }
}
