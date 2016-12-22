import { Component, OnInit, Input } from '@angular/core';
import { Course, Mark } from '../models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() currentCourse: Course;

  constructor() { }

  ngOnInit() {
  }

  newMark() {
    let mark = new Mark();
    this.currentCourse.marks.push(mark);
  }

}
