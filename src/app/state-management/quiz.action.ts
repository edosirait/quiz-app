import { createAction, props } from '@ngrx/store';
import {Question} from "../models/quiz.model";

export const answerQuestion = createAction('[Quiz] Answer Question',
  props<{ questionIndex: number, answerIndex: number, question: string }>()
);

export const dataQuizOptionActive = createAction('[Quiz] Data Quiz Option Active',
  props<{ dataQuiz: Question[] }>()
);
