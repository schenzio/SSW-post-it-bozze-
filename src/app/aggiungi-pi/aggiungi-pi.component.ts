import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-aggiungi-pi',
  templateUrl: './aggiungi-pi.component.html',
  styleUrls: ['./aggiungi-pi.component.css']
})
export class AggiungiPiComponent implements OnInit {
  @Output() newPostEvent = new EventEmitter<string>();
  constructor() { }
  newPost(newName: string) {
    this.newPostEvent.emit(newName);
  }
  ngOnInit() {
  }

}