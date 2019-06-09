import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameOverComponent } from './game-over/game-over.component';

import { appRoutes } from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    StartScreenComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
