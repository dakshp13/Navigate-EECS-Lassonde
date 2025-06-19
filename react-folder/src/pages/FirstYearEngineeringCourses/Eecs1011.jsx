import '../../css/FirstYearEngineeringCourses.css'

function eecs1011() {
    return (
        <>
            <h1>EECS 1011</h1>
            <h2>Computational Thinking Through Procedural Programming and Mechatronics</h2>
            <h3>No Prerequisite !</h3>
            <div id="PreEnroll">
                <h3>Pre-Enrollment Advice</h3>
                <p>This course is your first intro to programming course. Since no prior programming is required for the program they will teach
                    from scratch covering all the basics of programming from functions, methods, loops, conditions, etc. However, since this is common 
                    engineering the language used is MATLAB which is used in other engineering programs outside of software engineering. However,
                    in software engineering you will not use MATLAB again probably so it's important to learn the fundamental concepts of programming rather
                    than worrying to much about MATLAB itself.
                </p>
            </div>
            <div id="Resources">
                <h3>Resources I highly recommend for success in this course</h3>
                <h3>However since this is a very intro course these resources might not be needed but are good to have as a reference</h3>
                    <div className="links">
                       <p>
                        <a href="https://www.tutorialspoint.com/matlab/index.htm" target="_blank" rel="noopener noreferrer">
                            Tutorials Point: MATLAB
                         </a>
                            : Like said in before, this course is very simple however the link here can help with learning MATLAB syntax as well as plotting
                            and graphing which will come in handy in the final project and some labs.
                        </p>
                    </div>
            </div>
            <div id="PostCourse">
                <h3>After Completing the Course</h3>
                <p>
                   After this course you should be able to program small functions in MATLAB, however I would use my time after this course
                   (normally during the winter break) to start applying my skills in Java to prepare for EECS 1021 next semester.
                </p>
            </div>
        </>
    )
}

export default eecs1011