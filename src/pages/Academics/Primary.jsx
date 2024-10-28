import React from 'react';
import "../../Css/Primay.css";

const Primary = () => {
  return (
   <>
   <div className="primary-container">
    <div className="headline">
      <p className='primary-text'>Primary</p>
    </div>

    {/* First Text Section */}
    <section className="text-primary-list">
      <div className="text-list">
        <h1>The Primary consists of Classes I to IV.</h1>
        <p className="bolder-text">Timings: Students of Classes I to IV begin their day at 8:30 a.m.</p>
        <p>
          Students of grades I-IV follow a continuous assessment system. The student is assessed as per a CCE format
          (Continuous Classroom Evaluation), which comprises class tests (written as well as oral), assignments, presentations,
          activities, projects, and worksheets. It is also based on regularity and competence in the presentation of classwork
          and homework. This would require them to work in a regular and systematic manner.
        </p>
        <p>
          Grade IV will have a summative exam in Term 2 (Annual Exam) to prepare them for the next grade.
        </p>
      </div>
    </section>

    {/* First Image Section with Overlay Text */}
    <section className="primary-list-second">
      <div className="container-list-first">
        <div className="image-overlay-wrapper">
          <img src="https://dpskollam.com/wp-content/uploads/2019/09/04-1.jpg?id=5020" alt="Primary Image 1" className="primary-image" />
          
   
          <div className="image-overlay-content">
            <h2>At Primary we focus on Learning by Doing to enhance learning.</h2>
            <ul className="overlay-list">
              <li>⭐ Sharpens Problem Solving and Analytical Skills</li>
              <li>⭐ Facilitates Better Understanding by engaging the child completely</li>
              <li>⭐ Facilitates Learning Beyond Educational Environment</li>
              <li>⭐ Instills Confidence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Second Image Section with Overlay Text */}
    <section className="primary-list-third">
      <div className="container-list-second">
        <div className="image-overlay-wrapper-right">
          <img src="https://dpskollam.com/wp-content/uploads/2019/09/03-1.jpg?id=5026" alt="Primary Image 2" className="primary-image" />
          

          <div className="image-overlay-content-right">
            <h2>The range of subjects offered here includes:</h2>
            
     
            <div className="overlay-list-container">
              <ul className="overlay-list">
                <li>English</li>
                <li>Hindi</li>
                <li>III Language (Malayalam, Sanskrit, and French)</li>
                <li>Math</li>
                <li>Science</li>
                <li>Social Science</li>
                <li>Art/Craft</li>
                <li>Sports</li>
                <li>Swimming</li>
              </ul>

              <ul className="overlay-list">
                <li>Music/Dance</li>
                <li>General Knowledge</li>
                <li>Story Time</li>
                <li>Computer Science</li>
                <li>Robotics and STEM</li>
                <li>Communicative English</li>
                <li>Library</li>
                <li>Life Skills</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
   </>
  )
}

export default Primary;
