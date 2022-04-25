import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GamePageModule } from './game-page/game-page.module';

import { AppComponent } from './app.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { HeaderComponent } from './header/header.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RulesPageComponent } from './rules-page/rules-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorePageComponent,
    HeaderComponent,
    WelcomePageComponent,
    RulesPageComponent
  ],
  imports: [
    BrowserModule,
    GamePageModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
