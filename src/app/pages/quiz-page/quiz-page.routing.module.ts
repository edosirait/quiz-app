import {RouterModule, Routes} from "@angular/router";
import {QuizPageComponent} from "./quiz-page.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {
    path: '',
    component: QuizPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuizPageRoutingModule {}
