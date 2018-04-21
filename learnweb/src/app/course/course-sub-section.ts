import { Instructor } from '../course/instructor';
export interface ICourseSubSection {
    id: string;
    name: string;
    videoUrl: string;
    notes: string;
    show: boolean;
}   