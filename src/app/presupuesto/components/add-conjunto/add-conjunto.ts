import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-conjunto',
  templateUrl: './add-conjunto.html',
  styleUrls: ['./add-conjunto.scss']
})
export class AddConjuntoComponent {
  @Output() nuevoConjunto = new EventEmitter<void>();
  onClick() { this.nuevoConjunto.emit(); }
}
