import { Injectable } from '@angular/core';
import {Question} from './models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public questions: Question[] = [
    {
      question: 'What is God\'s name?',
      answers: [
        {answer: 'Jesus', correct: false},
        {answer: 'Jehovah', correct: true},
        {answer: 'Charles', correct: false},
        {answer: 'Moses', correct: false}
        ],
      scripture: 'Psalm 83:18: May people know that you, whose name is Jehovah, You alone are the Most High over all the earth.',
      img: './assets/img/tetragrammaton.jpg'
    },
    {
      question: 'How can you become Jehovah\'s friend?',
      answers: [
        {answer: 'Voting.', correct: false},
        {answer: 'Going to a place of worship.', correct: false},
        {answer: 'Learning about Him and his Son.', correct: true},
        {answer: 'Making a wish.', correct: false}
      ],
      scripture: 'John 17:3 This means everlasting life, their coming to know you, the only true God, and the one whom you sent,' +
        ' Jesus Christ.',
      img: './assets/img/bible.jpg'
    },
    {
      question: 'Proverb 27:11 says?',
      answers: [
        {answer: 'In the beginning God created the heavens and the earth.', correct: false},
        {answer: 'But Jeroboam the son of Neʹbat, the servant of David’s son Solomon, rose up and ' +
            'rebelled against his lord.', correct: false},
        {answer: 'So down the great dragon was hurled, the original serpent,' +
            ' the one called Devil and Satan, who is misleading the entire inhabited earth;' +
            ' he was hurled down to the earth, and his angels were hurled down with him.', correct: false},
        {answer: 'Be wise, my son, and make my heart rejoice,\n' +
            'So that I can make a reply to him who taunts me.', correct: true}
      ],
      scripture: 'Proverb 27:11 Be wise, my son, and make my heart rejoice,\n' +
        'So that I can make a reply to him who taunts me.',
      img: './assets/img/bible.jpg'
    },
    {
      question: 'Samuel\'s parents were named?' ,
      answers: [
        {answer: 'Elkanah and Hannah', correct: true},
        {answer: 'Potiphar and Jael', correct: false},
        {answer: 'Jacob and Abia', correct: false},
        {answer: 'Eetu and Ulrika', correct: false}
      ],
      scripture: '1 Samuel 1:19, 20',
      img: './assets/img/youngSamuel.jpg'
    },
    {
      question: 'Jehovah used Samuel to write what Bible books?' ,
      answers: [
        {answer: 'A part of Proverbs and Second Samuel', correct: false},
        {answer: 'Job', correct: false},
        {answer: 'Leviticus and Numbers', correct: false},
        {answer: 'Judges, Ruth, and part of First Samuel', correct: true}
      ],
      scripture: 'Judges, Ruth and part of First Samuel',
      img: './assets/img/ElderSamuel.jpg'
    },
    {
      question: 'Complete the Bible\'s statement: "And the boy Samuel continued...".' ,
      answers: [
        {answer: 'breaking up the works of unrighteousness.', correct: false},
        {answer: 'walking in integrity.', correct: false},
        {answer: 'growing up with Jehovah.', correct: true},
        {answer: 'writing the manual.', correct: false}
      ],
      scripture: '1 Samuel 2:21',
      img: './assets/img/youngSamuel.jpg'
    },
    {
      question: 'How old was Hezekiah when he became king of Judah?' ,
      answers: [
        {answer: '16 years old', correct: false},
        {answer: '25 years old', correct: true},
        {answer: '33 years old', correct: false},
        {answer: '12 years old', correct: false}
      ],
      scripture: '2 Kings 18:1,2',
      img: './assets/img/kingHezekiah.jpg'
    },
    {
      question: 'Jehovah miraculously extended Hezekiah\'s life by how many years?' ,
      answers: [
        {answer: '15 years', correct: true},
        {answer: '25 years', correct: false},
        {answer: '50 years', correct: false},
        {answer: '1 year', correct: false}
      ],
      scripture: '2 Kings 20:1-6',
      img: './assets/img/kingHezekiah.jpg'
    },
    {
      question: 'Because of Hezekiah\'s prayers and loyalty, Jehovah sent an angel to strike down...' ,
      answers: [
        {answer: '800,000 Assyrian soldiers.', correct: false},
        {answer: '28,000 Assyrian soldiers.', correct: false},
        {answer: '80,000 Assyrian soldiers.', correct: false},
        {answer: '185,000 Assyrian soldiers', correct: true}
      ],
      scripture: '2 Kings 19:15, 19, 35, 36.',
      img: './assets/img/angelStrike.jpg'
    },
    ];

  constructor() { }

  public getAll(): Question[] {
    return this.questions;
  }
}
