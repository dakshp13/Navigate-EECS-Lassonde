import '../css/Home.css'
import '../components/ProgramButtons'
import ProgramButton from '../components/ProgramButtons'
import { useState } from "react";
import { db } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore";
import NavBar from '../components/NavBar';
import Review from '../components/Review';





function Home() {

    return (
        <div className="home">
         <NavBar />
         <h1>Welcome to Navigate EECS @ Lassonde School of Engineering</h1>
         <h2>Choose your Program Below</h2>
         <div className="actions">
          <div className="buttons">
            <ProgramButton name="First-Year Common Engineering" />
            <ProgramButton name="Software Engineering: Core Courses" />
            <ProgramButton name="Software Engineering: Big Data Stream Courses" />
          </div>
          <Review />
         </div>
        
        </div>
    )
}

export default Home