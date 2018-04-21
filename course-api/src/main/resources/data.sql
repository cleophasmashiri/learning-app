INSERT INTO institution (institution_id, name,description) VALUES (10, 'Kepler', 'Kepler');

--pacing, course_number, mobileAvailable, effortHours, hidden, fee, end, start, enrollmentEnd, enrollmentStart

INSERT INTO course (course_id, 
institution_id, 
name, 
short_description, 
description, 
pacing, course_number,mobile_available, effort_hours, hidden, start, end
, enrollment_start, enrollment_end, start_display
, start_type, fee
) VALUES (1, 10, 
'Making Science and Engineering Pictures', 
'Making Science and Engineering Pictures..',
'Making Science and Engineering Pictures: A Practical Guide to Presenting Your Work',
'SelfPaced', 'Mat09323', true, 1233, true, '2017-10-10', '2017-10-10', '2017-10-10', '2017-10-10', '2017-10-10', 'manual', 1000),
(2, 10, 
'Mathematics O Level', 
'Mathematics O Level',
'Mathematics O Level'
, 'SelfPaced', 'Mat09323', true, 1233, true, '2017-10-10', '2017-10-10', '2017-10-10', '2017-10-10', '2017-10-10', 'manual', 1000), 
(3, 10, 
'Mathematics A Level', 
'Mathematics A Level',
'Mathematics A Level'
, 'SelfPaced', 'Mat09323', true, 1233, true, '2017-10-10', '2017-10-10', '2017-10-10', '2017-10-10', '2017-10-10', 'manual', 1000); 

INSERT INTO course_images (course_image_id, name, url, course_id) VALUES 
(1, 'raw', 'https://d37djvu3ytnwxt.cloudfront.net/asset-v1:MITx+0.111x+2T2015+type@asset+block@thumbnail.png', 1),
(2, 'small', 'https://d37djvu3ytnwxt.cloudfront.net/asset-v1:MITx+0.111x+2T2015+type@thumbnail+block@thumbnail-png-375x200.jpg', 1),
(3, 'large', 'https://d37djvu3ytnwxt.cloudfront.net/asset-v1:MITx+0.111x+2T2015+type@thumbnail+block@thumbnail-png-750x400.jpg', 1),
(4, 'raw', 'https://d37djvu3ytnwxt.cloudfront.net/asset-v1:MITx+0.111x+2T2015+type@asset+block@thumbnail.png', 2),
(5, 'small', 'https://d37djvu3ytnwxt.cloudfront.net/asset-v1:MITx+0.111x+2T2015+type@thumbnail+block@thumbnail-png-375x200.jpg', 2),
(6, 'large', 'https://d37djvu3ytnwxt.cloudfront.net/asset-v1:MITx+0.111x+2T2015+type@thumbnail+block@thumbnail-png-750x400.jpg', 2),
(7, 'raw', 'https://d37djvu3ytnwxt.cloudfront.net/asset-v1:MITx+0.111x+2T2015+type@asset+block@thumbnail.png', 3),
(8, 'small', 'https://d37djvu3ytnwxt.cloudfront.net/asset-v1:MITx+0.111x+2T2015+type@thumbnail+block@thumbnail-png-375x200.jpg', 3),
(9, 'large', 'https://d37djvu3ytnwxt.cloudfront.net/asset-v1:MITx+0.111x+2T2015+type@thumbnail+block@thumbnail-png-750x400.jpg', 3);


INSERT INTO course_objectives (course_objective_id, name, course_id) VALUES (1, 'Objective 1', 1),  (2, 'Objective 2', 1);

INSERT INTO course_instructors (course_instructor_id, name, title, course_id) VALUES (1, 'Cleophas Mashiri', 'Mr', 1), 
  (2, 'Douglas Mashiri', 'Mr', 2);

INSERT INTO course_sections (course_section_id, name, course_id) VALUES (1, 'Week 1', 1),  (2, 'Week 2', 1);

INSERT INTO course_sub_sections (course_sub_section_id, name, video_url, notes, course_section_id) VALUES 
(1, 'Differential equations 1', 'https://www.youtube.com/embed/1vMkUkPhmLc', 'Notes', 1),  (2, 'Differential equations 2','https://www.youtube.com/embed/1vMkUkPhmLc', 'Notes', 1),
(3, 'Differential equations 3', 'https://www.youtube.com/embed/1vMkUkPhmLc', 'Notes', 2),  (4, 'Differential equations 4', 'https://www.youtube.com/embed/1vMkUkPhmLc', 'Notes',2);

INSERT INTO users (user_id, username, password, enabled) VALUES 
	('1', 'peter@example.com', '$2a$10$D4OLKI6yy68crm.3imC9X.P2xqKHs5TloWUcr6z5XdOqnTrAK84ri', true),
	('2', 'john@example.com', '$2a$10$D4OLKI6yy68crm.3imC9X.P2xqKHs5TloWUcr6z5XdOqnTrAK84ri', true),
	('3', 'katie@example.com', '$2a$10$D4OLKI6yy68crm.3imC9X.P2xqKHs5TloWUcr6z5XdOqnTrAK84ri', true);

