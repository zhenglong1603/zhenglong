import { Component, ElementRef, ViewChild ,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  @ViewChild('wordElement') wordElement: ElementRef = {} as ElementRef;
  @ViewChild('cursorElement') cursorElement: ElementRef = {} as ElementRef;

  private words = ["hello", "你好", "bonjour"];
  private currentWord = 0;
  private currentChar = 0;
  private isDeleting = false;
  private delay = 200;

  ngAfterViewInit() {
    this.type();
  }

  private type() {
    let fullWord = this.words[this.currentWord];
    let displayText = this.isDeleting ? fullWord.substring(0, this.currentChar--) : fullWord.substring(0, this.currentChar++);

    this.wordElement.nativeElement.textContent = displayText;

    if (!this.isDeleting && displayText === fullWord) {
      this.delay = 2000; // Pause at end of word
      this.isDeleting = true;
    } else if (this.isDeleting && displayText === '') {
      this.isDeleting = false;
      this.currentWord = (this.currentWord + 1) % this.words.length;
      this.delay = 500; // Delay before start new word
    } else {
      this.delay = this.isDeleting ? 100 : 200;
    }

    setTimeout(() => this.type(), this.delay);
  }
}