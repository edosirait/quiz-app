import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuizState } from "./quiz.state";

const quizSelector = createFeatureSelector<QuizState>('quizState');

export const getQuestions = createSelector(
  quizSelector,
  state => state?.questions
)

export const selectAnswer = createSelector(
  quizSelector,
  state => state?.selectedAnswers
);
