import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.sass']
})
export class InputTextComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter()

  term: string = ''

  constructor() { }

  search = () =>
    this.term !== '' ? this.onEnter.emit(this.term) : ''

}
