export class CourseSection {
    
    constructor(private name: string) {
        this.name = name;
        this.subSections = []; 
    }
    subSections: CourseSection[];
}   