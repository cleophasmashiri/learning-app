package com.kepler.courseapi.course.model;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "institution")
public class Institution {

	// for hibernate
	public Institution() {}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "institution_id")
	private long id;
	private String name;
	private String description;

	
	@OneToMany(mappedBy = "institution", cascade = CascadeType.ALL)
	private List<Course> courses = new ArrayList<Course>();
}
