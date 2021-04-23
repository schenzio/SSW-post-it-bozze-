import { Component } from '@angular/core';
//importo il servizio che ho definito
import { ChuckService } from './chuck.service';

export class postit{
  testo: string
}
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
      titolo: "",
      testo: "Il mio primo post-it",
      colore: "black",
      data: "15/04/2021"
    },
     {
      id: 2,
      titolo: "",
      testo: "Il mio secondo post-it",
      colore: "black",
      data: "15/04/2021"
    },
     {
      id:3,
      titolo: "",
      testo: "Il mio terzo post-it",
      colore: "black",
      data: "15/04/2021"
    }
  ]
  selezionato: string;
  barzelletta: string;
  //istanzio un oggetto di tipo del servizio chuck
  constructor(private joke: ChuckService){ };
  seleziona(testo: string) {
    this.selezionato = testo;
  }
  clean() {
    this.selezionato=undefined;
  }
  test(){
    let obs = this.joke.getData().subscribe( 
      (x:any)=>{ console.log(x.value)},
       err => console.error('Observer got an error: ' + err)
    )
  }
}
