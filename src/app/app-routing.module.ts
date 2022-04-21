import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RulesPageComponent } from './rules-page/rules-page.component';

const routes: Routes = [
  {path: 'game', component: GamePageComponent},
  {path: 'score', component: ScorePageComponent},
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'rules', component: RulesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
