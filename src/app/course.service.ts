import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as Rx from 'rxjs/Rx';
import { Course, Mark } from './models';

@Injectable()
export class CourseService {

  private courseUrl: string = 'https://jacob-student.herokuapp.com/courses';
  private markUrl: string = 'https://jacob-student.herokuapp.com/marks';

  constructor(
    private http: Http
  ) { }

  getCourses(): Rx.Observable<Array<Course>> {
    return this.http.get(`${this.courseUrl}`)
      .map((res: Response) => res.json())
      .catch((error:any) => Rx.Observable.throw(error.json().error || 'Server error'));
  }

  getCourseMarks(course: Course): Rx.Observable<Array<Mark>> {
    return this.http.get(`${this.courseUrl}/${course.id}/marks`)
      .map((res: Response) => res.json())
      .catch((error:any) => Rx.Observable.throw(error.json().error || 'Server error'));
  }

  postCourse(course: Course): Rx.Observable<Course> {
    return this.http.post(`${this.courseUrl}`, course)
      .map((res: Response) => res.json())
      .catch((error:any) => Rx.Observable.throw(error.json().error || 'Server error'));
  }

  deleteCourse(course: Course) {
    return this.http.delete(`${this.courseUrl}/${course.id}`);
  }

  postMark(mark: Mark): Rx.Observable<Mark> {
    return this.http.post(`${this.markUrl}`, mark)
      .map((res: Response) => res.json())
      .catch((error:any) => Rx.Observable.throw(error.json().error || 'Server error'));
  }
  deleteMark(mark: Mark) {
    return this.http.delete(`${this.markUrl}/${mark.id}`);
  }

}
