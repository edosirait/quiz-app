import { Question } from '../models/quiz.model';

export interface QuizState {
  questions: Question[];
  selectedAnswers: number[];
}
