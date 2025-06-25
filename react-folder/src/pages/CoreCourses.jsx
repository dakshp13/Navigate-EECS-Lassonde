import CourseButtons from '../components/CourseButtons'
import '../css/CoreCourses.css'

function CoreCourses(){
    return (
       <div className="CoreCourses">
            <h1>Software Engineering: Core Program Courses</h1>
            <h2>Below are the courses you will take in Second Year</h2>
            <div className="actionsSecondYear">
                <CourseButtons name="EECS 2030" />
                <CourseButtons name="EECS 2032" />
                <CourseButtons name="EECS 2200" />
                <CourseButtons name="ENG 2001" />
                <CourseButtons name="MATH 1090" />
                <CourseButtons name="MATH 2930" />
                <CourseButtons name="EECS 2021" />
                <CourseButtons name="EECS 2101" />
                <CourseButtons name="EECS 2311" />
                <CourseButtons name="ENG 2003" />
                <CourseButtons name="MATH 2015" />
                <CourseButtons name="PHYS 2020" />
                <CourseButtons name="PHYS 2211" />
            </div>
            <h2>Below are the courses you will take in Third Year</h2>
            <div className="actionsThirdYear">
                <CourseButtons name="EECS 3101" />
                <CourseButtons name="EECS 3201" />
                <CourseButtons name="EECS 3342" />
                <CourseButtons name="EECS 3216" />
                <CourseButtons name="EECS 3221" />
                <CourseButtons name="EECS 3311" />
                <CourseButtons name="ENG 3000" />
                <CourseButtons name="ESSE 2210" />
            </div>
            <h2>Below are the courses you will take in Fourth Year</h2>
            <div className="actionsFourthYear">
                <CourseButtons name="ENG 4000" />
                <CourseButtons name="EECS 4312" />
                <CourseButtons name="EECS 4313" />
                <CourseButtons name="EECS 4314" />
                <CourseButtons name="EECS 4315" />
                <CourseButtons name="EECS 4413" />
            </div>
       </div>
    )
}

export default CoreCourses