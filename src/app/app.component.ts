import { Component } from '@angular/core';
import { Course } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private currentCourse: Course;

  courseSelected(course: Course) {
    this.currentCourse = course;
  }
}
