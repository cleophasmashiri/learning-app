
package com.kepler.courseapi.course.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepler.courseapi.course.model.Institution;

public interface InstitutionRepository extends JpaRepository<Institution, Long> {
}
