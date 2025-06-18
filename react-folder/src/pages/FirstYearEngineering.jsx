import CourseButtons from '../components/CourseButtons'
import '../css/FirstYearEngineering.css'

function FirstYearEngineering(){
    return (
       <div className="firstYearEngineering">
        <h1>First Year Engineering Page</h1>
        <h2>Below are the Course you will take in First Year</h2>
        <div className="actionsFirstYear">
            <CourseButtons name="MATH 1013" />
            <CourseButtons name="MATH 1014" />
            <CourseButtons name="MATH 1025" />
            <CourseButtons name="MATH 1028" />
            <CourseButtons name="PHYS 1800" />
            <CourseButtons name="PHYS 1801" />
            <CourseButtons name="CHEM 1100" />
            <CourseButtons name="EECS 1011" />
            <CourseButtons name="EECS 1021" />
            <CourseButtons name="ENG 1101" />
            <CourseButtons name="ENG 1102" />
        </div>
        <p>Note: MATH 1028 is the same (cross-listed) as EECS 1028</p>
       </div>
    )
}

export default FirstYearEngineering