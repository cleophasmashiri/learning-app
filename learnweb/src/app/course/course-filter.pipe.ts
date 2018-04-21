import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from './course';

@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {
   transform(value: ICourse[], args: string): ICourse[] {
        let filter: string = args? args.toLocaleLowerCase(): null;
        return filter? value.filter((course: ICourse) => 
    course.name.toLocaleLowerCase().indexOf(filter) != -1): value; 
   }
}
