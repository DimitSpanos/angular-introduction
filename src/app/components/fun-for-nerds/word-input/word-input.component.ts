import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.css'
})
export class WordInputComponent {

  @Output() partialWord = new EventEmitter<string>()
  @Output() word = new EventEmitter<string>()

  currentWord = ''

  onInput(event: Event) {
    const input = event.target as HTMLInputElement
    this.partialWord.emit(input.value)   // emit the partial word to the parent component
    this.currentWord = input.value       // store the current word in the component and emit it after submit
  }

  onSubmit() {
    this.word.emit(this.currentWord);
  }


}
