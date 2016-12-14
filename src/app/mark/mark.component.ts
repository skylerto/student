import { Component, OnInit, Input } from '@angular/core';
import { Mark } from '../models';

@Component({
  selector: '[app-mark]',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {

  @Input('app-mark') mark: Mark;

  constructor() { }

  ngOnInit() { }

  calculateGrade() {
    return this.mark.weight * this.mark.mark;
  }

}
