package com.kepler.courseapi.course.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.kepler.courseapi.course.model.Course;
import com.kepler.courseapi.course.repository.CourseRepository;

@Component
public class CourseServiceImpl {

	@Autowired
	private CourseRepository courseRepository;
	
	public List<Course> list() {
		return courseRepository.findAll();
	}

	public Course find(long courseId) {
		return courseRepository.findOne(courseId);
	}

}
