import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit {

  @Input() guessObject = {guess:0, green:0, red:0, message:""};

  constructor() { }

  ngOnInit(): void {
  }

}
