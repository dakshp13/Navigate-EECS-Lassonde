import '../../../css/CoreCoursesCourses.css'

function eng3000() {
    return (
        <>
            <h1>ENG 3000</h1>
            <h2>Professional Engineering Practice</h2>
            <h3>Prerequisites: ENG 2001</h3>
            <div id="PreEnroll">
                <h3>Pre-Enrollment Advice</h3>
                <p> This is just another Eng course that focuses on ethics as an engineer as well as goes over legal rules and regulations.
                    In terms of advice, just be prepared to read, since there may be decent documentations that you will need to read. Mostly 
                    this course is built to prepare you for your P.Eng which allows you to be registered as a Professional Engineer if you choose to be one.
                </p>
            </div>
            <div id="Resources">
                <h3>Resources I highly recommend for success in this course</h3>
                
                    <div className="links">
                       <p>
                        <a href="https://www.peo.on.ca/licence-holders/code-ethics" target="_blank" rel="noopener noreferrer">
                            Professional Engineers Ontario: Code of Ethics
                         </a>
                            : Even though most people don't need external resources to do good in this class, I would say if you wanted to learn some more
                            take a look at stuff on PEO websites and documents, as it might help for this course
                        </p>
                    </div>
            </div>
            <div id="PostCourse">
                <h3>After Completing the Course</h3>
                <p>
                   For the most part, you don't have to do much after this class, however, like said before if you are going to apply for a 
                   P.Eng certification to be a professional engineer, some of the material from this course may be helpful for your P.Eng exam,
                   hence you might want to keep your notes in a safe place to revisit in the future.
                </p>
            </div>
        </>
    )
}

export default eng3000