declare class WithMethod {
    myMethod(): void;
}
declare const isSame: boolean;
declare class WithProperty {
    myProperty: () => void;
}
declare const instance: WithProperty;
declare class WithProperty2 {
    myProperty: () => void;
    constructor();
}
declare const instance2: WithProperty2;
declare class Teacher {
    sayHello(): void;
}
declare let teacher: Teacher;
interface Learner {
    name: string | number;
    study(hours: number): void;
}
declare class students implements Learner {
    name: string;
    study(hours: number): void;
}
declare class Lesson {
    subject: string;
    constructor(subject: string);
}
declare class OnlineLesson extends Lesson {
    url: string;
    constructor(subject: string, url: string);
}
declare class PastGrades {
    grades: number[];
}
declare class LabeledPastGrades extends PastGrades {
    label?: string;
}
declare let subClass: LabeledPastGrades;
declare class Assignment {
    grade?: number;
}
declare class GradedAssignment extends Assignment {
    grade: number | undefined;
    constructor(grade: number);
}
