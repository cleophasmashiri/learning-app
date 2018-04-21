package com.kepler.courseapi.course.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "course")
public class Course {

	// for hibernate
	public Course() {}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "course_id")
	private long id;
	private String name;
	private String shortDescription;
	private String description;
	
	@ManyToOne
	@JoinColumn(name = "institution_id")
	@JsonBackReference
	private Institution institution;
	
	@Enumerated(EnumType.STRING)
	private Pacing pacing;
	private String courseNumber;
	private boolean mobileAvailable;
	private int effortHours;
	private boolean hidden;
	private Date start;
	private Date end;
	private Date enrollmentStart;
	private Date enrollmentEnd;
	private Date startDisplay;
	@Enumerated(EnumType.STRING)
	private StartType startType;
	private BigDecimal fee;
	
	@OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<CourseObjective> courseObjectives = new ArrayList<CourseObjective>();
	
	@OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<CourseSection> courseSections = new ArrayList<CourseSection>();
	
	@OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<CourseInstructor> courseInstructors = new ArrayList<CourseInstructor>();
	
	
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    @JsonIgnore
	private List<CourseImage> courseImages = new ArrayList<CourseImage>();
    
    public Map<String, String> getImages() {
    	if(this.courseImages == null){
    		return null;
    	}
    	Map<String, String> images = new HashMap<String, String>();
    	for(CourseImage image: this.courseImages) {
    		images.put(image.getName(), image.getUrl());
    	}
    	return images;
    }
    
		
}
