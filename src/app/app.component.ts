import { Component } from '@angular/core';
import { Course } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private currentCourse: Course;
  private page: string;

  courseSelected(input) {
    if (typeof input === 'string') {
      this.currentCourse = undefined;
      this.page = input;
    } else {
      console.log(input);
      this.page = undefined;
      this.currentCourse = input;
    }
  }
}
