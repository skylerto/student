import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseService } from '../course.service';
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
  private loading: boolean;
  private page: string;

  constructor(
    private courseService: CourseService
  ) {
    this.loading = true;
    this.courseService.getCourses().subscribe((res) => {
      this.courses = <Array<Course>> res;
      this.loading = false;
    });
  }

  ngOnInit() { }

  courseSelected(course: Course) {
    this.page = undefined;
    this.onCourseSelected.emit(course);
  }

  newCourse() {
    let course = new Course();
    course.title = 'New Course';
    course.marks = new Array();
    this.courses.push(course);
    this.currentCourse = course;
    this.onCourseSelected.emit(course);
  }

  selectedPage(page: string) {
    this.page = page;
    this.onCourseSelected.emit(page);
  }
}
