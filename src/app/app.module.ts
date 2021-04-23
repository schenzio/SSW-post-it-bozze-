import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ho aggiunto manualmente http perché è usato nel servizio chuck
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AggiungiPiComponent } from './aggiungi-pi/aggiungi-pi.component';
import { VisualizzaPiComponent } from './visualizza-pi/visualizza-pi.component';
import { ChuckService } from './chuck.service';

@NgModule({
  //i componenti realizzati nel modulo
  declarations: [
    AppComponent,
    AggiungiPiComponent,
    VisualizzaPiComponent
  ],
  //componenti e servizi di altri componenti utilizzati nei componenti del modulo
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  //i servizi realizzati nel modulo
  providers: [ChuckService],
  //il componente visualizzato all'avvio, contiene gli altri
  bootstrap: [AppComponent]
})
export class AppModule { }
