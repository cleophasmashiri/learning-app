package com.kepler.courseapi.course.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepler.courseapi.course.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
