import '../../../css/CoreCoursesCourses.css'

function eecs2032() {
    return (
        <>

            <h1>EECS 2032</h1>
            <h2>Introduction to Embedded Systems</h2>
            <h3>Prerequisites: EECS 1021</h3>
            <h3>Corequisite: EECS 2030</h3>
            <div id="PreEnroll">
                <h3>Pre-Enrollment Advice</h3>
                <p> Now this course is a very special course in Second year because of two reasons. On this page I normally focus on helping students with 
                    resources rather than talking about the course itself, however for this course I will make an exception. Here in this one course you will learn three 
                    different concepts. Bash Scripting/Linux Commands, C Programming, Embedded Systems Intro. This class has a lot of content. In terms of the last part with the 
                    embedded systems, its simply just an intro, hence it is in the last 3 weeks of the semester and normally doesn't require external resources because mostly 
                    everything can be found in the slides. However, the first two parts which are very important require good focus to ensure success.
                </p>
            </div>
            <div id="Resources">
                <h3>Resources I highly recommend for success in this course</h3>
                
                    <div className="links">
                       <p>
                        <a href="https://www.youtube.com/watch?v=EACe7aiGczw" target="_blank" rel="noopener noreferrer">
                            Bash Scripting: Sed Commands
                         </a>
                            : In terms of the Bash Scripting part of the course, it is simply just using your original programming knowledge and applying 
                            the bash syntax and a few other things. However, one thing that always confused me was the "sed" command and its usages, espacially because
                            you are garunteed to have a question about it on the lab test and the final exam. So this is a video I found useful for learning that concept.
                       </p>
                        <p>
                        <a href="https://www.youtube.com/playlist?list=PLWKjhJtqVAbmUE5IqyfGYEYjrZBYzaT4m" target="_blank" rel="noopener noreferrer">
                            FreeCodeCamp: C and C++ Playlist
                         </a>
                            : Now that you are in the software engineering stream FreeCodeCamp will be a very useful resource. In terms of the overall course of EECS 2032, when working 
                            with C you are again using your previous programming knowledge and applying C syntax to it. However, there are a few new concepts in C that you must learn 
                            and are not available in other languages. This includes Dynamic Memory Allocations, Pointers, Structures, and even some file operations. In the FreeCodeCamp playlist 
                            there is a bunch of content. You would never need to go through it all, however, going to the C Course in the playlist you can see timestamps for things like pointers and 
                            working with files. You can simply just watch those and get information from there.
                       </p>
                        <p>
                        <a href="https://www.w3schools.com/c/index.php" target="_blank" rel="noopener noreferrer">
                            w3Schools: C Programming
                         </a>
                            : This is another amazing resource for software engineering students and its w3 Schools who teach various programming concepts. Once again, going to there 
                            C Programming course you can find tabs for specific topics like Memory Management and learn with seeing the code and examples.
                       </p>
                      
                    </div>
            </div>
            <div id="PostCourse">
                <h3>After Completing the Course</h3>
                <p>
                   In terms of the software engineering stream you will not work to directly with embedded systems itself, unless in the industry later on 
                   you want to pursue it as a career. And in terms of linux commands, they basically become second-hand knowledge as you get into third year. However, 
                   C Programming is used again in EECS 3221 and possibly even later on in your career. But in EECS 3221 they mostly DO NOT re-teach C Concepts. They assume 
                   you know all the fundamentals of C and then start showing how you can use C to build concepts related to Operating Systems. Unless you get a prof that uses Java 
                   for EECS 3221, it will be highly likely that you will need to ensure you C skills are good to handle the future courses. So please make sure you properly 
                   understand the fundamentals here.
                </p>
            </div>
   
        </>
    )
}

export default eecs2032