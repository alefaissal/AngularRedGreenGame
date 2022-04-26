import { Component, NgModule, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})

export class GamePageComponent implements OnInit {

  chosenLevel:string = "easy";
  password = {lenght:0, example:0, pwd:0 };
  levelMessage:string = "Please choose a level";
  guessMessage = "Choose a level first"
  inputGuess!: number;
  enableButton = true;
  numberOfTries=0;
  
  guesses:{guess:number, green:number, red:number, message:string}[] = [
    // {guess:354, green:2, red:1, message:"Nice"},
    // {guess:264, green:0, red:2, message:"Better"}
  ];

  constructor() { }

  ngOnInit(): void {

  }

  // Method that receive event from radio button, pass the value and from this, generate a password and message for level
  generateNewPassword(event: MatRadioChange){
    if(this.password.lenght>0){
      this.reset();
    }
    this.enableButton = false;
    let data = {lenght:0, example:0, pwd:0 }
    let size: number;
    let sample: number;
    this.chosenLevel = event.value;
    let msg:string;
    let lvl:string;

    switch (event.value) {
      case "easy":
        size = 3;
        sample = 333;
        lvl = "Easy";
        msg = "Piece of Cake!";
        this.numberOfTries=6;
        break;
      case "medium":
        size = 4;
        sample = 4444;
        lvl = "Medium";
        msg = "Try it on!";
        this.numberOfTries=8;
        break;
      case "difficult":
        size = 5;
        sample = 55555;
        lvl = "Difficult";
        msg = "Are you ready for this?!";
        this.numberOfTries=12;
        break;
      case "reallyHard":
        size = 6;
        sample = 666666;
        lvl = "Really Hard";
        msg = "Be mindfull, it is not easy!";
        this.numberOfTries=16;
        break;
      default:
        size = 7;
        sample = 7777777;
        lvl = "Impossible";
        msg = "Must be a Jedi Master for this one!!";
        this.numberOfTries=20;
        break;
    }
    data.lenght = size;
    data.example = sample;
    let passw = parseInt(Math.random()*(10**size)+"");
    data.pwd = passw;

    this.password = data;
    this.levelMessage = "You choose the " + lvl + " level. " + msg
    this.guessMessage = "Try your first guess with " + data.lenght + " digits."
    console.log(this.password.pwd)
  }

  validateGuess(guess:number) {
  let data = this.password
  if(data.lenght === 0){
    this.inputGuess;
    return
  }

  let guessObject = {guess:guess, green:0, red:0, message:""}
  let green = 0;
  let red = 0;
  let message = "";

  let gStr = guess + "";

  let pStr = data.pwd + "";
  
  if(gStr.length !== pStr.length){
    this.guessMessage = "Please use a guess with " + ((data.pwd+"").length) + " digits."
    return;
  }

  let pMap = new Map();
  let gMap = new Map();

  for (let i = 0; i < pStr.length; i++) {
    if (pStr[i] === gStr[i]) {
      green++;
    }

    if (pMap.has(pStr[i])) {
      pMap.set(pStr[i], pMap.get(pStr[i]) + 1);
    } else {
      pMap.set(pStr[i], 1);
    }

    if (gMap.has(gStr[i])) {
      gMap.set(gStr[i], gMap.get(gStr[i]) + 1);
    } else {
      gMap.set(gStr[i], 1);
    }
  }
  
  pMap.forEach((value, key) => {
    if (gMap.has(key)) {
      red =
      value <= gMap.get(key)
      ? (red = red + value)
      : (red = red + gMap.get(key));
    }
  });
  
  this.numberOfTries = this.numberOfTries-1;
  message = (this.numberOfTries<1)?"Sorry, Game Over. Try again. The password was: " + this.password.pwd:
            (green === this.password.lenght)?"Congrats!! You got it!":
            ((green === 0) && (red-green) === 0)?"Oh no! Don't get discouraged try another guess!":
            ((green === 0) && (red-green) < 2)?"It is something. Try again!":
            ((green)>(red-green))?"Great guess, keep going!":
            "Not bed, let's increase this green number"
    
  

  guessObject.green = green;
  guessObject.red = (red-green);
  guessObject.message = message;

  this.guesses.push(guessObject);
  if(green === this.password.lenght || this.numberOfTries<1){
    this.enableButton=true;
  }
  return;
  }
  

  getLevelMessage(){
    return this.levelMessage;
  }

  getExampleOfPwd(){
    if(!this.levelMessage.includes("Please")){
      return this.password.example;
    }else{
      return ""
    }
  }

  reset(){
    this.chosenLevel= "easy";
    this.password = {lenght:0, example:0, pwd:0 };
    this.levelMessage = "Please choose a level";
    this.guesses = [];
    this.guessMessage = "Choose a level first"
    this.enableButton = true;
    console.log("Reset")
  }
  


}
