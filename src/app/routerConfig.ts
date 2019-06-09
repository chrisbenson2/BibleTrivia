// routerConfig.ts

import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import {QuestionComponent} from './question/question.component';
import {GameOverComponent} from './game-over/game-over.component';

export const appRoutes: Routes = [
  { path: '',
    component: StartScreenComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  },
  { path: 'game-over',
    component: GameOverComponent
  }
];

export default appRoutes;
