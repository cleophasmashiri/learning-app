package com.kepler.courseapi.course.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;

@Data
@Entity
@Table(name="course_instructors")
public class CourseInstructor {
	
	public CourseInstructor() {}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "course_instructor_id")
	private long id;
	private String name;
	private String title;
	
	@ManyToOne
	@JoinColumn(name = "course_id")
	@JsonBackReference
	private Course course;
	
}
