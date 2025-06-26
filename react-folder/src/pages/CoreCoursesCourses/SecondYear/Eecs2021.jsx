import '../../../css/CoreCoursesCourses.css'

function eecs2021() {
    return (
        <>
            <h1>EECS 2021</h1>
            <h2>Computer Organization</h2>
            <h3>Prerequisites: EECS 1021</h3>
            <div id="PreEnroll">
                <h3>Pre-Enrollment Advice</h3>
                <p> Going into second year, you will here a lot from people around that this is one of the toughest courses and they are probably correct.
                    In terms of learning content Assembly and Verilog is what you will learn during your time in the course. In terms of what you will need 
                    before starting this course for success, is basically nothing because this will be your introduction to low-level programming.
                </p>
            </div>
            <div id="Resources">
                <h3>Resources I highly recommend for success in this course</h3>
                
                    <div className="links">
                       <p>
                        <a href="https://www.youtube.com/playlist?list=PLeFoe3FAv19dfNDjiUeJ6sD91vzPRqbch" target="_blank" rel="noopener noreferrer">
                            C Code to RISC-V
                         </a>
                            : The hardest part of this course is taking the programming skills you learned in first year and turing them into 
                            assembly code. When you are just starting out it can be really tough. I recommend watching this entire playlist, as it only has a handfull of 
                            videos and they are short but goes over exactly the key concepts of writing Assembly code in RISC-V which is exactly what you 
                            will be doing in your labs and in your lab test.
                       </p>
                      
                    </div>
            </div>
            <div id="PostCourse">
                <h3>After Completing the Course</h3>
                <p>
                   This will pave the way for many courses in your undergrad so the content you learn here will not leave. If you do not understand core computer concepts 
                   like working with bits or caching or CPU Processing you should probably review it. In terms of post-course projects, there is nothing in particular to 
                   do, as in future courses you will have project work building on the skills from these courses.
                </p>
            </div>
        </>

    )
}

export default eecs2021