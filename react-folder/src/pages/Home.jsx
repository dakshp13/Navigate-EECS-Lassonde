import '../css/Home.css'
import '../components/ProgramButtons'
import ProgramButton from '../components/ProgramButtons'
import { useState } from "react";
import { db } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore";
import NavBar from '../components/NavBar';





function Home() {

  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!review.trim()) {
      alert("Please write a review first!");
      return;
    }
    try {
      await addDoc(collection(db, "reviews"), {
        review: review,
        createdAt: new Date(),
      });
      alert("Review submitted successfully!");
      setReview(""); 
    } catch (error) {
      console.error(error);
      alert("Error submitting review. Try again later.");
    }
  };
  
  
    return (
        <div className="home">
         <NavBar />
         <h1>Welcome to Navigate EECS @ Lassonde School of Engineering</h1>
         <h2>Choose your Program Below</h2>
         <div className="actions">
          <ProgramButton name="First-Year Common Engineering" />
          <ProgramButton name="Software Engineering: Core Courses" />
          <ProgramButton name="Software Engineering: Big Data Stream Courses" />
          <p id="Notes">Notes: All engineering students follow a common schedule in their first year so all the material can be
            found via the first button. The other program specific buttons only include information for second year
            and onwards. All Courses are broken down into their seperate years based on the degree checklist provided by the 
            school to guide students. No elective choice courses are shown as they depend on a chosen option and are not a core course.
          </p>
          <h3 id="ReviewText">Feel Free to Leave a Review Below: Can be anything in terms of new resources or just other advice to add</h3>
          <form onSubmit={handleSubmit}>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Enter your review here..."
              className="review-box"
            />
            <button id="SubmitButton" type="submit">Submit Review</button>
          </form>
        
 
         </div>
        
        </div>
    )
}

export default Home