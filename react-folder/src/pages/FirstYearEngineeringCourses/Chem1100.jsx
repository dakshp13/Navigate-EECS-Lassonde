import '../../css/FirstYearEngineeringCourses.css'

function chem1100() {
    return (
        <>
            <h1>CHEM 1100</h1>
            <h2>Chemistry and Materials Science for Engineers</h2>
            <h3>No Prerequisite !</h3>
            <div id="PreEnroll">
                <h3>Pre-Enrollment Advice</h3>
                <p> This course is very similar to Grade 12 High School Chemistry which is SCH4U as the course code in 
                    Ontario. You go over many of the same concepts. However, there is a few changes in terms of material science 
                    that is taught in this engineers version.
                </p>
            </div>
            <div id="Resources">
                <h3>Resources I highly recommend for success in this course</h3>
                
                    <div className="links">
                       <p>
                        <a href="https://www.youtube.com/playlist?list=PL0o_zxa4K1BWziAvOKdqsMFSB_MyyLAqS" target="_blank" rel="noopener noreferrer">
                            Organic Chem Tutor Playlist: General Chemistry
                         </a>
                            : Organic Chem Tutor playlists are a common theme in the first year of engineering and once again he will save you in many courses. 
                            However for this course since a lot of its review, you do not have to worry to much, but if you are ever stuck on a topic this is the place to go.
                        </p>
                        <p>
                        <a href="https://www.youtube.com/playlist?list=PL0o_zxa4K1BXP7TUO7656wg0uF1xYnwgm" target="_blank" rel="noopener noreferrer">
                            Organic Chem Tutor Playlist: Organic Chemistry
                         </a>
                            : Now in this course since its tailored towards engineering the amount of Organic Chemistry is very low, However
                            there is some, and once again Organic Chem Tutor is the place to go
                        </p>
                    </div>
            </div>
            <div id="PostCourse">
                <h3>After Completing the Course</h3>
                <p>
                   Since York doesn't have a Chemical Engineering program and for most people in Software Engineering will not take
                   another Chemistry course again, after finishing this course you don't have to worry much!
                </p>
            </div>
        </>
    )
}

export default chem1100