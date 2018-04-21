import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ICourse } from './course';

@Injectable()
export class CourseService {

  private _http: Http;

  constructor(private http: Http) { this._http = http; }

  url:string = 'courses.json'; //'courses';

  getCourses(): Observable<ICourse[]> {
    return this._http.get('courses.json')
      .map((response: Response) => <ICourse[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch((error: Response) => Observable.throw(error.json().error || 'Server error'));
  }
}
