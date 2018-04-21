package com.kepler.courseapi.course.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepler.courseapi.course.model.CourseImage;

public interface CourseImageRepository extends JpaRepository<CourseImage, Long> {
}
