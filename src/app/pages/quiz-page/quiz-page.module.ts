import {NgModule} from "@angular/core";
import {QuizPageComponent} from "./quiz-page.component";
import {RouterModule} from "@angular/router";
import {AsyncPipe, CommonModule, NgClass, NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QuizPageRoutingModule} from "./quiz-page.routing.module";
import {StoreModule} from "@ngrx/store";
import {quizReducer} from "../../state-management/quiz.reducer";

@NgModule({
  declarations: [QuizPageComponent],
  imports: [
    AsyncPipe,
    QuizPageRoutingModule,
    NgForOf,
    StoreModule.forFeature('quizState', quizReducer),
    NgClass
  ],
  providers: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class QuizPageModule {}
