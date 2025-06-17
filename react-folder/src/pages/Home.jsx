import '../css/Home.css'
import '../components/ProgramButtons'
import ProgramButton from '../components/ProgramButtons'


function Home() {
    return (
        <div className="home">
         <h1>Welcome to Navigate EECS @ Lassonde School of Engineering</h1>
         <h2>Choose your Program Below</h2>
         <div className="actions">
          <ProgramButton name="Software Engineering" />
          <ProgramButton name="Computer Engineering" />
          <ProgramButton name="Electrical Engineering" />
         </div>
        
        </div>
    )
}

export default Home