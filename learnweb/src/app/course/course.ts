import {CourseSection} from './course-section';
import { Instructor } from '../course/instructor';
export interface ICourse {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
    short_description: string;
    objectives: string[];
    sections: CourseSection[];
    instructors: Instructor[]
}   