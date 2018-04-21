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
@Table(name="course_images")
public class CourseImage {
	
	// for hibernate
	public CourseImage() {}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "course_image_id")
	private long id;
	private String url;
	private String name;
	
	@ManyToOne
	@JoinColumn(name = "course_id")
	@JsonBackReference
	private Course course;
	
}
