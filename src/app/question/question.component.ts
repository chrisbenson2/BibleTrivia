import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';
import {Question} from '../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public questions: Question[];
  public answered: boolean;
  public correct: boolean;
  public previousQuestion: Question;
  public questionNumber = 0;
  public randomQuestion: Question;
  constructor(
    private _questionService: QuestionService
  ) { }

  ngOnInit() {
    this.answered = false;
    this.questions = this._questionService.getAll();
    this.shuffle(this.questions);
  }

  private shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  public selectedAnswer(answer) {
    this.answered = true;
    console.log(answer.correct);
    this.correct = answer.correct;
  }

  public nextAnswer() {
     this.previousQuestion = this.randomQuestion;
     this.answered = false;
    // this.randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
    //
    // if (this.randomQuestion === this.previousQuestion) {
    //   this.randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
    // }
    // sequential code
    this.questionNumber = this.questionNumber + 1;

    if (this.questionNumber === this.questions.length) {
      this.questionNumber = 0;
    }
  }

}
