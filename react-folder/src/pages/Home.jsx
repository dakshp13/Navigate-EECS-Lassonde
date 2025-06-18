import '../css/Home.css'
import '../components/ProgramButtons'
import ProgramButton from '../components/ProgramButtons'


function Home() {
    return (
        <div className="home">
         <h1>Welcome to Navigate EECS @ Lassonde School of Engineering</h1>
         <h2>Choose your Program Below</h2>
         <div className="actions">
          <ProgramButton name="First-Year Common Engineering" />
          <ProgramButton name="Software Engineering: Core Courses" />
          <ProgramButton name="Software Engineering: Big Data Stream Courses" />
          <p>Notes: All engineering students follow a common schedule in their first year so all the material can be
            found via the first button. The other program specific buttons only include information for second year
            and onwards.
          </p>
         </div>
        
        </div>
    )
}

export default Home