import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I miei post-it';
  postits =[
    {
      id: 1,
      testo: "Il mio primo post-it",
      colore: "black",
      data: "15/04/2021"
    },
     {
      id: 2,
      testo: "Il mio secondo post-it",
      colore: "black",
      data: "15/04/2021"
    },
     {
      id:3,
      testo: "Il mio terzo post-it",
      colore: "black",
      data: "15/04/2021"
    }
  ]/*
  cities = [
    {
      nome: 'Torino',
      temperatura: '14'
    }, {
      nome: 'Milano',
      temperatura: '15'
    }, {
      nome: 'Genova',
      temperatura: '18'
    }
  ];*/
  selezionata: string;
  seleziona(name: string) {
    this.selezionata = name;
  }/*
  clean() {
    this.selezionata=undefined;
  }*/
}
