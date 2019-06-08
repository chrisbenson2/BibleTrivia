import {Answer} from './answer';

export interface Question {
  question: string;
  answers: Answer[];
  scripture: string;
  img?: String;
}
