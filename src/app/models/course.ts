import { Mark } from '../models/mark';

export class Course {
  id: number;
  title: string;
  code: string;
  marks: Array<Mark>;
}
