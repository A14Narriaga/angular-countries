import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core'
import { debounceTime, Subject } from 'rxjs'

@Component({
	selector: 'app-input-text',
	templateUrl: './input-text.component.html',
	styleUrls: ['./input-text.component.sass'],
})
export class InputTextComponent implements OnInit {
	@Input() holderText: string = ''
	@Output() onEnter: EventEmitter<string> = new EventEmitter()
	@Output() onDebounce: EventEmitter<string> = new EventEmitter()

	term: string = ''
	debouncer: Subject<string> = new Subject()

	ngOnInit(): void {
		this.debouncer.pipe(debounceTime(400)).subscribe((data) => {
			this.onDebounce.emit(data)
		})
	}

	search = () => (this.term !== '' ? this.onEnter.emit(this.term) : '')

	keyPressed = () => {
		this.debouncer.next(this.term)
	}
}
