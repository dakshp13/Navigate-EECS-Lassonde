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
import Eecs2021 from './pages/CoreCoursesCourses/SecondYear/Eecs2021'
import Eecs2030 from './pages/CoreCoursesCourses/SecondYear/Eecs2030'
import Eecs2032 from './pages/CoreCoursesCourses/SecondYear/Eecs2032'
import Eecs2101 from './pages/CoreCoursesCourses/SecondYear/Eecs2101'
import Eecs2200 from './pages/CoreCoursesCourses/SecondYear/Eecs2200'
import Eecs2311 from './pages/CoreCoursesCourses/SecondYear/Eecs2311'
import Eng2001 from './pages/CoreCoursesCourses/SecondYear/Eng2001'
import Eng2003 from './pages/CoreCoursesCourses/SecondYear/Eng2003'
import Math1090 from './pages/CoreCoursesCourses/SecondYear/Math1090'
import Math2015 from './pages/CoreCoursesCourses/SecondYear/Math2015'
import Math2930 from './pages/CoreCoursesCourses/SecondYear/Math2930'
import Phys2020 from './pages/CoreCoursesCourses/SecondYear/Phys2020'
import Phys2211 from './pages/CoreCoursesCourses/SecondYear/Phys2211'
import Eecs3101 from './pages/CoreCoursesCourses/ThirdYear/Eecs3101'
import Eecs3201 from './pages/CoreCoursesCourses/ThirdYear/Eecs3201'
import Eecs3216 from './pages/CoreCoursesCourses/ThirdYear/Eecs3216'
import Eecs3221 from './pages/CoreCoursesCourses/ThirdYear/Eecs3221'
import Eecs3311 from './pages/CoreCoursesCourses/ThirdYear/Eecs3311'
import Eecs3342 from './pages/CoreCoursesCourses/ThirdYear/Eecs3342'
import Eng3000 from './pages/CoreCoursesCourses/ThirdYear/Eng3000'
import Esse2210 from './pages/CoreCoursesCourses/ThirdYear/Esse2210'
import Eecs3405 from './pages/BigDataStreamCourses/Eecs3405'
import Eecs3421 from './pages/BigDataStreamCourses/Eecs3421'
import Eecs4411_Eecs4414 from './pages/BigDataStreamCourses/Eecs4411_Eecs4414'
import Eecs4412 from './pages/BigDataStreamCourses/Eecs4412'
import Eecs4415 from './pages/BigDataStreamCourses/Eecs4415'


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
        <Route path="/EECS 2021" element={<Eecs2021 />}/>
        <Route path="/EECS 2030" element={<Eecs2030 />}/>
        <Route path="/EECS 2032" element={<Eecs2032 />}/>
        <Route path="/EECS 2101" element={<Eecs2101 />}/>
        <Route path="/EECS 2200" element={<Eecs2200 />}/>
        <Route path="/EECS 2311" element={<Eecs2311 />}/>
        <Route path="/ENG 2001" element={<Eng2001 />}/>
        <Route path="/ENG 2003" element={<Eng2003 />}/>
        <Route path="/MATH 1090" element={<Math1090 />}/>
        <Route path="/MATH 2015" element={<Math2015 />}/>
        <Route path="/MATH 2930" element={<Math2930 />}/>
        <Route path="/PHYS 2020" element={<Phys2020 />}/>
        <Route path="/PHYS 2211" element={<Phys2211 />}/>
        <Route path="/EECS 3101" element={<Eecs3101 />}/>
        <Route path="/EECS 3201" element={<Eecs3201 />}/>
        <Route path="/EECS 3216" element={<Eecs3216 />}/>
        <Route path="/EECS 3221" element={<Eecs3221 />}/>
        <Route path="/EECS 3311" element={<Eecs3311 />}/>
        <Route path="/EECS 3342" element={<Eecs3342 />}/>
        <Route path="/ENG 3000" element={<Eng3000 />}/>
        <Route path="/ESSE 2210" element={<Esse2210 />}/>
        <Route path="/EECS 3405" element={<Eecs3405 />}/>
        <Route path="/EECS 3421" element={<Eecs3421 />}/>
        <Route path="/EECS 4411 OR EECS 4414" element={<Eecs4411_Eecs4414 />}/>
        <Route path="/EECS 4412" element={<Eecs4412 />}/>
        <Route path="/EECS 4415" element={<Eecs4415 />}/>
      </Routes>
    </main>
  )
}

export default App
