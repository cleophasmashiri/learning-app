package com.kepler.courseapi.course.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.kepler.courseapi.course.model.Course;
import com.kepler.courseapi.course.service.CourseServiceImpl;

@RequestMapping("courses")
@RestController
public class CourseController {
	
	@Autowired
	private CourseServiceImpl courseServiceImpl;
	
	@RequestMapping(value="",  method = RequestMethod.GET)
	public ResponseEntity<List<Course>> list() {
		return new ResponseEntity<List<Course>>(courseServiceImpl.list(), HttpStatus.OK);
	} 
	
	@RequestMapping(value="/{courseId}",  method = RequestMethod.GET)
	public ResponseEntity<Course> getOne(@PathVariable long courseId) {
		return new ResponseEntity<Course>(courseServiceImpl.find(courseId), HttpStatus.OK);
	} 
}
