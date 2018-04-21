import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ICourse } from '../course/course';

@Injectable()
export class CourseDetailService {

  _http: Http;
   private _productUrl = 'courses/'; //'assets/api/courses.json';

  constructor(private http: Http) { this._http = http; }
  
  getCourse(courseId: string): Observable<ICourse> {
      return this._http.get(this._productUrl + courseId)
      .map((response: Response) => <ICourse>response.json())
      .catch((error: Response) => Observable.throw(error.json().error || 'Server error'));
  }
}
