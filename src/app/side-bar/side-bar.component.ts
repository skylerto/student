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

  stubCourses(): Array<Course> {
    let res = new Array();
    let c = new Course();
    c.title = 'Physics';
    c.code = 'PHYS1000';
    let m = new Mark();
    m.title = 'Test 1';
    m.weight = 0.1;
    m.mark = 0.8;
    c.marks = new Array();
    c.marks.push(m);

    res.push(c);
    return res;
  }
}
