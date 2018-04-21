import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDetailService } from '../course-detail/course-detail.service';
import { ICourse } from '../course/course';
import { ICourseSubSection } from '../course/course-sub-section';
import { Instructor } from '../course/instructor';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _CourseDetailService: CourseDetailService) { }

  private course: ICourse;
  private errorMessage: string;
  private courseId: string;
  private weekId: string;


  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.weekId = this.route.snapshot.paramMap.get('weekId') || '1';
    this._CourseDetailService.getCourse(this.courseId)
      .subscribe(course => this.course = course,
      error => this.errorMessage = <any>error);

  }
    showNotes (subSection: ICourseSubSection) {
      subSection.show = !subSection.show;
    }
  beforeChange($event: NgbPanelChangeEvent) {
    // if (this.weekId === $event.panelId) {
    //   this.weekId = null;
    // } else {
      this.weekId = $event.panelId;
    // }
  };
}
