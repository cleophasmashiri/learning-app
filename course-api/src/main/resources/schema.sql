CREATE TABLE institution (
    institution_id BIGINT PRIMARY KEY auto_increment,
    name VARCHAR(16),
    description VARCHAR(32)
);

CREATE TABLE course (
    course_id BIGINT PRIMARY KEY auto_increment,
    name VARCHAR(100),
    description VARCHAR(500),
    short_description VARCHAR(250),
    institution_id BIGINT NOT NULL REFERENCES institution (institution_id),
    pacing VARCHAR(16),
    course_number VARCHAR(16),
    mobile_available BOOLEAN,
    effort_hours INTEGER,
    hidden BOOLEAN,
    start DATE,
    end DATE,
    enrollment_start DATE,
    enrollment_end DATE,
    start_display DATE,
    start_type VARCHAR(16),
    fee DECIMAL
);

CREATE TABLE course_images (
    course_image_id BIGINT PRIMARY KEY auto_increment,
    name VARCHAR(16),
    url VARCHAR(200),
    course_id BIGINT NOT NULL REFERENCES course(course_id)
);

CREATE TABLE course_objectives (
    course_objective_id BIGINT PRIMARY KEY auto_increment,
    name VARCHAR(16),
    course_id BIGINT NOT NULL REFERENCES course(course_id)
);

CREATE TABLE course_instructors (
    course_instructor_id BIGINT PRIMARY KEY auto_increment,
    name VARCHAR(32),
    title VARCHAR(32),
    course_id BIGINT NOT NULL REFERENCES course(course_id)
);

CREATE TABLE course_sections (
    course_section_id BIGINT PRIMARY KEY auto_increment,
    name VARCHAR(32),
    course_id BIGINT NOT NULL REFERENCES course(course_id)
);

CREATE TABLE course_sub_sections (
    course_sub_section_id BIGINT PRIMARY KEY auto_increment,
    name VARCHAR(32),
    video_url VARCHAR(200),
    notes VARCHAR(1000),
    course_section_id BIGINT NOT NULL REFERENCES course_sections(course_section_id)
);

CREATE TABLE users (
	user_id BIGINT PRIMARY KEY auto_increment,
	username VARCHAR(128) UNIQUE,
	password VARCHAR(256),
	enabled BOOLEAN
); ---ENGINE=InnoDB DEFAULT CHARSET=UTF8;
