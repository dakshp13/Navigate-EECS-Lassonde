import CourseButtons from '../components/CourseButtons'
import '../css/FirstYearEngineering.css'

function FirstYearEngineering(){
    return (
       <div className="firstYearEngineering">
        <h1>First Year Engineering Page</h1>
        <h2>Below are the Course you will take in First Year</h2>
        <div className="actionsFirstYear">
            <CourseButtons name="MATH 1013: Applied Calculus 1" />
            <CourseButtons name="MATH 1014: Applied Calculus 2" />
            <CourseButtons name="MATH 1025: Applied Linear Algebra" />
            <CourseButtons name="MATH/EECS 1028: Discrete Mathematics for Engineers" />
            <CourseButtons name="PHYS 1800: Engineering Mechanics" />
            <CourseButtons name="PHYS 1801: Electricity, Magnetism and Optics for Engineers" />
            <CourseButtons name="CHEM 1100: Chemistry and Materials Science for Engineers" />
            <CourseButtons name="EECS 1011: Computational Thinking Through Procedural Programming and Mechatronics" />
            <CourseButtons name="EECS 1021: Object Oriented Programming from Sensors to Actuators" />
            <CourseButtons name="ENG 1101: Renaissance Engineering 1: Ethics, Communication and Problem Solving" />
            <CourseButtons name="ENG 1102: Renaissance Engineering 2: Engineering Design Principles" />
        </div>
       </div>
    )
}

export default FirstYearEngineering