import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {QuizState} from "../../state-management/quiz.state";
import * as QuizAction from "../../state-management/quiz.action";
import {getQuestions, selectAnswer} from "../../state-management/quiz.selector";
import {Question} from "../../models/quiz.model";
import {MatDialog} from "@angular/material/dialog";
import {SimpleModalsComponent} from "../../shared/simple-modals/simple-modals.component";

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {
  quizData: Question[] = [];
  idAnswer: any[] = []
  correctAnswers: number = 0;
  score: number = 0
  isButtonClicked: boolean = false;

  constructor(private store: Store<QuizState>,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    /** Info: call and updating list of question */
    this.store.select(getQuestions).subscribe((value: Question[]) => {
      this.quizData = value;
    })

    /** Info: call and updating answer identity */
    this.store.select(selectAnswer).subscribe(value => {
      this.idAnswer = value;
    })
  }

  /** Info: set value trigger action click answer */
  answerQuestion(questionIndex: number, answerIndex: number, question: string) {
    this.store.dispatch(QuizAction.answerQuestion({ questionIndex, answerIndex, question }));
  }

  /** Info: action click to show result scoring */
  checkingAnswer() {
    this.correctAnswers = 0
    this.quizData.forEach((val, i) => {
      if (val.answerId === this.idAnswer[i]) {
        const dataTemp = val.options.find(x => x.active);
        if (dataTemp) {
          this.correctAnswers++;
        }
      }
    })
    this.score = (this.correctAnswers / this.quizData.length) * 100;
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(SimpleModalsComponent, {
      data: { score: this.score }
    });
  }
}
