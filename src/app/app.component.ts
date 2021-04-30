import { Component } from '@angular/core';
import { ChuckService } from './chuck.service';

export class Postit {
  titolo: string;
  testo: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I miei post-it';
  postits = [1,2,3 ];
  ids : Array<string> = [];
  selezionato: Postit;
  barzelletta: string;
  //istanzio un oggetto di tipo del servizio chuck
  constructor(private obj: ChuckService){ };
  /*
  clean() {
    this.selezionato=undefined;
  }*/
  test(){
    let obs = this.obj.getData().subscribe( 
      (x:any)=>{ console.log(x)},
       err => console.error('Observer got an error: ' + err)
    )
  }
  ShowPost(id) {
    this.obj.getData().subscribe(
      ( x: any ) => {
        this.selezionato.titolo = x[id].titolo,
        this.selezionato.testo =  x[id].testo
      },
      err => console.error('Observer got an error: ' + err)
    );
 }
  Gettitle() {
    this.obj.getData().subscribe(
      ( x: any ) => {
        for (var key in x) {
        var y = x[key].titolo;
        this.ids.push(key);
        }
      },
      
      err => console.error('Observer got an error: ' + err)
    );
 }
  addPost(newPost: string) {
    this.posts.push(newPost);
  }

}
