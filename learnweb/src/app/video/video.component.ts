import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDetailService } from '../course-detail/course-detail.service';
import { ICourse } from '../course/course';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  private errorMessage: String;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private courseDetailService: CourseDetailService) {}
  ngOnInit() {
    let courseId = this.activatedRoute.snapshot.paramMap.get('courseId');
    this.courseDetailService.getCourse(courseId)
     .subscribe(course => this.course = course,
      error => this.errorMessage = <any>error);
  }

  private course: ICourse;
  goBack() {
     let courseId = this.activatedRoute.snapshot.paramMap.get('courseId');
     let weekId = this.activatedRoute.snapshot.paramMap.get('weekId');
     this.router.navigate(['learn', courseId, weekId]);
  }
}
