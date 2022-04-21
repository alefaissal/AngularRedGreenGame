import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  generateNewPassword(gameLevel:string){
    let data = {lenght:0, example:0, pwd:0 }
    gameLevel = gameLevel.toLowerCase()
    let size: number;
    let sample: number;
    switch (gameLevel) {
      case "easy":
        size = 3;
        sample = 111;
        break;
      case "medium":
        size = 4;
        sample = 1111;
        break;
      case "difficult":
        size = 5;
        sample = 11111;
        break;
      case "really hard":
        size = 6;
        sample = 111111;
        break;
      default:
        size = 7;
        sample = 1111111;
        break;
    }
    data.lenght = size;
    data.example = sample;
    let password = parseInt(Math.random()*(10**size)+"");
    data.pwd = password;

    return data
  }

  validateGuess(data:{lenght:number, example:number, pwd:number }, guess:number) {

  let green = 0;
  let red = 0;

  let gStr = guess + "";

  let pStr = data.pwd + "";
  
  if(gStr.length !== pStr.length) return "Gues should be the same size of password example"

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

  return (
    "Guess was: " +
    gStr +
    " and the result is: " +
    green +
    "G, " +
    (red - green) +
    "R"
  );
}



}
