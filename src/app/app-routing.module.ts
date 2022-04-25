import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorePageComponent } from './score-page/score-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RulesPageComponent } from './rules-page/rules-page.component';

const routes: Routes = [
  {path: 'game', loadChildren:() => import('./game-page/game-page.module')
  .then(m => m.GamePageModule)},
  {path: 'score', component: ScorePageComponent},
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'rules', component: RulesPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
