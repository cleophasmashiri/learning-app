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

@Entity
@Data
@Table(name = "course_objectives")
public class CourseObjective {
	
	// for hibernate
		public CourseObjective() {}
		
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		@Column(name = "course_objective_id")
		private long id;
		private String name;
		
		@ManyToOne
		@JoinColumn(name = "course_id")
		@JsonBackReference
		private Course course;

}
