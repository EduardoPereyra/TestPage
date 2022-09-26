import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions: any[];
  submitted: boolean;
  correctAnswersCount: number;
  loading: boolean;

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.reset();
  }

  reset(): void {
    this.loading = true;
    this.submitted = false;
    this.correctAnswersCount = 0;
    this.questions = [];
    this.quizService.getQuizQuestions(10).subscribe(
      response => {
        this.questions = response.results;
        this.questions.forEach(question => {
          question.answers = [];
          question.incorrect_answers.forEach(incorrectAnswer => {
            question.answers.push(this.atob((incorrectAnswer)));
          });
          const pos = Math.floor(Math.random() * 4);
          question.answers.splice(pos, 0, this.atob(question.correct_answer));
          question.response = null;
          this.loading = false;
        });
      }
    );
  }

  submit(): void {
    this.submitted = true;
    console.log(this.questions);
    this.questions.forEach(question => {
      if (question.response === this.atob(question.correct_answer)) {
        this.correctAnswersCount += 1;
      }
    });
  }

  atob(text: string): string {
    return atob(text);
  }

}
