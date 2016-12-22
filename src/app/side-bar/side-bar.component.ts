import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course, Mark } from '../models';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() currentCourse: Course;
  @Output() onCourseSelected = new EventEmitter();
  private courses: Array<Course>;

  constructor() {
    this.courses = this.stubCourses();
  }

  ngOnInit() { }

  courseSelected(course: Course) {
    this.onCourseSelected.emit(course);
  }

  newCourse() {
    let course = new Course();
    course.title = 'New Course';
    this.courses.push(course);
    this.onCourseSelected.emit(course);
  }

  stubCourses(): Array<Course> {
    let res = new Array();
    let c = new Course();
    c.marks = new Array();
    c.title = 'Physics';
    c.code = 'PHYS1000';

    let m = new Mark();
    m.title = 'Test 1';
    m.weight = 0.1;
    m.mark = 0.8;
    c.marks.push(m);

    m = new Mark();
    m.title = 'Test 2';
    m.weight = 0.1;
    m.mark = 0.9;
    c.marks.push(m);

    m = new Mark();
    m.title = 'Test 3';
    m.weight = 0.15;
    m.mark = 0.9;
    c.marks.push(m);

    m = new Mark();
    m.title = 'Exam';
    m.weight = 0.65;
    m.mark = 0.4;
    c.marks.push(m);

    res.push(c);
    return res;
  }
}
