import { createReducer, on } from '@ngrx/store';
import * as QuizAction from './quiz.action'
import { QuizState } from './quiz.state' ;
import {Question} from "../models/quiz.model";

const initialState: QuizState = {
  /** Info: Hardcode List Question */
  questions: [
    {
      question: 'What is the capital of Indonesian?',
      options: [
        {labelText: 'A. Paris', active: false},
        {labelText: 'B. London', active: false},
        {labelText: 'C. Jakarta', active: false},
        {labelText: 'D. Madrid', active: false},
        ],
      answerId: 2,
    },
    {
      question: 'The Sasando musical instrument comes from the area of?',
      options: [
        {labelText: 'A. Medan', active: false},
        {labelText: 'B. Nusa Tenggara Timur,', active: false},
        {labelText: 'C. Bandung', active: false},
        {labelText: 'D. Bogor', active: false},
      ],
      answerId: 1
    },
    {
      question: 'What is the capital of England?',
      options: [
        {labelText: 'A. Paris', active: false},
        {labelText: 'B. London', active: false},
        {labelText: 'C. Berlin', active: false},
        {labelText: 'D. Madrid', active: false},
      ],
      answerId: 1
    },
    {
      question: 'Animals that reproduce by dividing?',
      options: [
        {labelText: 'A. starfish', active: false},
        {labelText: 'B. planarian worms', active: false},
        {labelText: 'C. protozoa', active: false},
        {labelText: 'D. hydra', active: false},
      ],
      answerId: 2
    },
    {
      question: 'The lizard\'s ability to suddenly drop its tail to trick its enemies is called?',
      options: [
        {labelText: 'A. mimicry', active: false},
        {labelText: 'B. echolocation', active: false},
        {labelText: 'C. autotomy', active: false},
        {labelText: 'D. anatomy', active: false}
      ],
      answerId: 2
    },
    // Add more questions as required
  ],
  selectedAnswers: []
};

export const quizReducer = createReducer(
  initialState,
  on(QuizAction.answerQuestion, (state: QuizState, { questionIndex, answerIndex, question }) => {
    /** Info: remove read only */
    let modified : Question[] = state.questions.map(x=> ({...x}));
    modified.forEach(x=> {x.options = x.options?.map(y => ({...y}))});

    /** Info: active/inactive answer */
    modified[questionIndex].options.forEach(x => {
      x.active = x.labelText == question ? !x.active : false;
    })

    /** Info: answer identity */
    const newAnswers = {...state.selectedAnswers};
    newAnswers[questionIndex] = answerIndex;

    return {
      ...state,
      selectedAnswers: newAnswers,
      questions: modified
    };
  }),
);
