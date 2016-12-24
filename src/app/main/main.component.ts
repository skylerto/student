import { Component, OnInit, Input,  OnChanges, SimpleChange } from '@angular/core';
import { CourseService } from '../course.service';
import { Course, Mark } from '../models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {

  @Input() currentCourse: Course;
  @Input() page: string;

  constructor(
    private courseService: CourseService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (changes['currentCourse'] && this.currentCourse && this.currentCourse.id) {
      this.courseService.getCourseMarks(this.currentCourse).subscribe((res) => {
        this.currentCourse.marks = res;
      });
    }
  }

  newMark() {
    let mark = new Mark();
    mark.title = 'New Mark';
    mark.mark = 1;
    mark.weight = 1;
    this.currentCourse.marks.push(mark);
  }

  save() {
    this.courseService.postCourse(this.currentCourse).subscribe((res) => {
      let id = (<Course> res).id;
      this.currentCourse.id = id;
      this.currentCourse.marks.forEach((a) => {
        a.course_id = id;
        a.weight = parseFloat(`${a.weight}`);
        a.mark = parseFloat(`${a.mark}`);
        a.mark = parseFloat(`${a.mark}`);
        this.courseService.postMark(a).subscribe((res) => {
          a.id = res.id;
          location.reload();
        });
      });
    });
  }

  calculateTotal(): number {
    if (this.currentCourse && this.currentCourse.marks) {
      return this.currentCourse.marks.reduce((g, c) => g + c.contribution, 0);
    } else {
      return 0;
    }
  }

  delete() {
    this.courseService.deleteCourse(this.currentCourse).subscribe((res) => {
      location.reload();
    });
  }

  changedMark($event) {
    if ($event.change === 'delete') {
      this.currentCourse.marks = this.currentCourse.marks.filter((m) => {
        return m.title !== $event.mark.title;
      });
    }
  }

}
