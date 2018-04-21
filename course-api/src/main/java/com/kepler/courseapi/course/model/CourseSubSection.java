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
@Table(name = "course_sub_sections")
public class CourseSubSection {

	// for hibernate
	public CourseSubSection() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "course_sub_section_id")
	private long id;
	private String name;
	private String videoUrl;
	private String notes;
	
	@ManyToOne
	@JoinColumn(name = "course_section_id")
	@JsonBackReference
	private CourseSection courseSection;
	

}
