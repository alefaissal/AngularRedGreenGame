import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

import { GamePageComponent } from './game-page.component';
import { GamePageRoutingModule } from './game-page-routing.module';
import { GuessComponent } from './guess/guess.component';

@NgModule({
    imports:[
        MatRadioModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        CommonModule,
        GamePageRoutingModule
    ],
    exports:[
        GamePageComponent,
    ],
     declarations:[
        GamePageComponent,
        GuessComponent
    ]
})

export class GamePageModule { }
