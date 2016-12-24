import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CourseService } from '../course.service';
import { Mark } from '../models';

@Component({
  selector: '[app-mark]',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {

  @Input('app-mark') mark: Mark;
  @Output() changedMark = new EventEmitter();

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() { }

  calculateGrade() {
    this.mark.contribution = this.mark.weight * this.mark.mark;
    if (this.mark.contribution) {
      return this.mark.contribution;
    } else {
      return 0;
    }
  }

  delete() {
    this.courseService.deleteMark(this.mark).subscribe((res) => {
      this.changedMark.emit({
        change: 'delete',
        mark: this.mark
      });
    });
  }

}
