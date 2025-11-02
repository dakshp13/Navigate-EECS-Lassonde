import '../../../css/CoreCoursesCourses.css'

function eecs3221() {
    return (
        <>
            <h1>EECS 3221</h1>
            <h2>Operating System Fundamentals</h2>
            <h3>Prerequisites: EECS 2030, EECS 2021, EECS 2032</h3>
            <div id="PreEnroll">
                <h3>Pre-Enrollment Advice</h3>
                <p> A mandatory and important course for software engineers. Normally if you are going into general software developer roles in the industry,
                    you may not need all the information taught here, but I believe that every Software Engineer/Computer Scientist should be familiar with and 
                    understand Operating Systems, since its such an important concept. But besides that the programming languages used are either C or Java, however,
                    for me and most people C is used in the course assignment. The most important thing to note is that the prof does not teach C from scratch and 
                    based on the prerequisites, it is assumed you know all the fundamentals of C programming taught in 2032 or 2031.
                </p>
            </div>
            <div id="Resources">
                <h3>Resources I highly recommend for success in this course</h3>
                
                    <div className="links">
                       <p>
                        <a href="https://www.youtube.com/@CodeVault/playlists" target="_blank" rel="noopener noreferrer">
                            Code Vault: Playlists
                         </a>
                            : This was such a massive resource that I used for my assignments to take key operating system concepts and 
                            turn them into C code. One thing about this course depending on your professor, is that it can get really theory based in 
                            lectures, and hence its important to sometimes learn how to apply that theory since it will be used in assignments, from youtube channels
                            like this, which explain it very well.
                       </p>
                       <p>
                        <a href="https://www.youtube.com/@PortfolioCourses/playlists" target="_blank" rel="noopener noreferrer">
                            Portfolio Courses: Playlists
                         </a>
                            : Similar to the first link, a very good youtube channel that takes operating system theory and explains it in 
                            practical C programming. This channel helped a lot for pthreads implementation which will almost always be an 
                            assignment for most operating system courses.
                       </p>                    
                      
                    </div>
            </div>
            <div id="PostCourse">
                <h3>After Completing the Course</h3>
                <p>
                   Most likely, in the program this is your final C course, and unless your going into low-level development C won't be needed much,
                   however, it is important to still understand the core concepts of this course and to make sure you use the content learned in different 
                   areas of your education and career.
                </p>
            </div>
   
        </>
    )
}

export default eecs3221