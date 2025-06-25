import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './css/App.css'
import FirstYearEngineering from './pages/FirstYearEngineering'
import CoreCourses from './pages/CoreCourses'
import BigDataStream from './pages/BigDataStream'
import Chem1100 from './pages/FirstYearEngineeringCourses/Chem1100'
import Eecs1011 from './pages/FirstYearEngineeringCourses/Eecs1011'
import Eecs1021 from './pages/FirstYearEngineeringCourses/Eecs1021'
import Eng1101 from './pages/FirstYearEngineeringCourses/Eng1101'
import Eng1102 from './pages/FirstYearEngineeringCourses/Eng1102'
import Math1013 from './pages/FirstYearEngineeringCourses/Math1013'
import Math1014 from './pages/FirstYearEngineeringCourses/Math1014'
import Math1025 from './pages/FirstYearEngineeringCourses/Math1025'
import Math1028 from './pages/FirstYearEngineeringCourses/Math1028'
import Phys1800 from './pages/FirstYearEngineeringCourses/Phys1800'
import Phys1801 from './pages/FirstYearEngineeringCourses/Phys1801'
import Eecs4312 from './pages/CoreCoursesCourses/FourthYear/Eecs4312'
import Eecs4313 from './pages/CoreCoursesCourses/FourthYear/Eecs4313'
import Eecs4314 from './pages/CoreCoursesCourses/FourthYear/Eecs4314'
import Eecs4315 from './pages/CoreCoursesCourses/FourthYear/Eecs4315'
import Eecs4413 from './pages/CoreCoursesCourses/FourthYear/Eecs4413'
import Eng4000 from './pages/CoreCoursesCourses/FourthYear/Eng4000'


function App() {

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/First-Year Common Engineering" element={<FirstYearEngineering />}/>
        <Route path="/Software Engineering: Core Courses" element={<CoreCourses />}/>
        <Route path="/Software Engineering: Big Data Stream Courses" element={<BigDataStream />}/>
        <Route path="/CHEM 1100" element={<Chem1100 />}/>
        <Route path="/EECS 1011" element={<Eecs1011 />}/>
        <Route path="/EECS 1021" element={<Eecs1021 />}/>
        <Route path="/ENG 1101" element={<Eng1101 />}/>
        <Route path="/ENG 1102" element={<Eng1102 />}/>
        <Route path="/MATH 1013" element={<Math1013 />}/>
        <Route path="/MATH 1014" element={<Math1014 />}/>
        <Route path="/MATH 1025" element={<Math1025 />}/>
        <Route path="/MATH 1028" element={<Math1028 />}/>
        <Route path="/PHYS 1800" element={<Phys1800 />}/>
        <Route path="/PHYS 1801" element={<Phys1801 />}/>
        <Route path="/EECS 4312" element={<Eecs4312 />}/>
        <Route path="/EECS 4313" element={<Eecs4313 />}/>
        <Route path="/EECS 4314" element={<Eecs4314 />}/>
        <Route path="/EECS 4315" element={<Eecs4315 />}/>
        <Route path="/EECS 4413" element={<Eecs4413 />}/>
        <Route path="/ENG 4000" element={<Eng4000 />}/>

      </Routes>
    </main>
  )
}

export default App
