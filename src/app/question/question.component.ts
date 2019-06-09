import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {QuestionService} from '../question.service';
import {Question} from '../models/question';
import {Router} from '@angular/router';
import {GameOverComponent} from '../game-over/game-over.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewInit {

  public questions: Question[];
  public score: number;
  public lives = 3;
  public wrong: number;
  public answered: boolean;
  public correct: boolean;
  public previousQuestion: Question;
  public questionNumber = 0;
  public randomQuestion: Question;
  constructor(
    private _questionService: QuestionService,
    private elementRef: ElementRef,
    private router: Router
  ) { }

  ngOnInit() {
    this.answered = false;
    this.questions = this._questionService.getAll();
    this.score = 0;
    this.wrong = 0;
    this.shuffle(this.questions);
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#170c08';
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
    this.correct = answer.correct;

    if (this.correct) {
      this.score = this.score + 1;
    } else {
      this.lives = this.lives - 1;
      this.wrong = this.wrong + 1;
    }
  }

  public nextAnswer() {
    if (this.wrong === 3) {
      this.router.navigate(['game-over']);
    }
     this.previousQuestion = this.randomQuestion;
     this.answered = false;

    this.questionNumber = this.questionNumber + 1;

    if (this.questionNumber === this.questions.length) {
      this.questionNumber = 0;
    }
  }

}
