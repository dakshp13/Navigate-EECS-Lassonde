import CourseButtons from '../components/CourseButtons'
import '../css/BigDataStream.css'

function BigDataStream(){
    return (
       <div className="BigDataStream">
            <h1>Software Engineering: Big Data Stream Courses</h1>
            <h2>Below are the courses you will take if you pursue the Big Data Stream</h2>
            <div className="actionsBigData">
                <CourseButtons name="EECS 3421" />
                <CourseButtons name="EECS 3405" />
                <CourseButtons name="EECS 4412" />
                <CourseButtons name="EECS 4415" />
                <CourseButtons name="EECS 4411 OR EECS 4414" />
            </div>

       </div>
    )
}

export default BigDataStream