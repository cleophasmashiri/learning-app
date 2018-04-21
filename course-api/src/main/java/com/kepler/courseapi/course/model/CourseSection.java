package com.kepler.courseapi.course.model;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

@Entity
@Data
@Table(name = "course_sections")
public class CourseSection {
	
	// for hibernate
		public CourseSection() {}
		
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		@Column(name = "course_section_id")
		private long id;
		private String name;
		
		@ManyToOne
		@JoinColumn(name = "course_id")
		@JsonBackReference
		private Course course;
		
		@OneToMany(mappedBy = "courseSection", cascade = CascadeType.ALL)
		private List<CourseSubSection> courseSubSections = new ArrayList<CourseSubSection>();

}
