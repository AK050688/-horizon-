import React from 'react';
import "../../Css/MiddleSchool.css";

const MiddleSchool = () => {
  return (
   <>
   <div className="middle-school-container">
    <div className="headline">
      <p className='primary-text'>Middle School</p>
    </div>

    {/* First Text Section */}
    <section className="text-primary-list">
      <div className="text-list">
        <h1>Middle School is a foundation for future academic success</h1>
        <p className="bolder-text">Timings: Students of Grades V to VII begin their day at 8:30 a.m.</p>
        <p>
          Middle School is a vital stage where students collaborate with teachers to strengthen their abilities and address areas for improvement. 
          The primary aim is to cultivate effective study habits and promote overall development. The curriculum adheres to CBSE and NCERT guidelines.
        </p>
        <p className="bolder-text">
          “Creativity is as important now in education as literacy, and we should treat it with the same status.” – Ken Robinson
        </p>
      </div>
    </section>

    {/* First Image Section with Overlay Text */}
    <section className="primary-list-second">
      <div className="container-list-first">
        <div className="image-overlay-wrapper">
          <img src="https://dpskollam.com/wp-content/uploads/2019/09/04-1.jpg?id=5020" alt="Middle School Image 1" className="primary-image" />
          
          <div className="image-overlay-content">
            <h2>Middle School emphasizes the holistic development of each child.</h2>
            <ul className="overlay-list">
              <li>⭐ Develops a consistent study routine and a positive mindset</li>
              <li>⭐ Encourages both academic and extracurricular growth</li>
              <li>⭐ Strong teacher-student mentorship for comprehensive progress</li>
              <li>⭐ CBSE-based curriculum for structured and effective learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Second Image Section with Overlay Text */}
    <section className="primary-list-third">
      <div className="container-list-second">
        <div className="image-overlay-wrapper-right">
          <img src="https://dpskollam.com/wp-content/uploads/2019/09/03-1.jpg?id=5026" alt="Middle School Image 2" className="primary-image" />
          
          <div className="image-overlay-content-right">
            <h2>The subjects for Middle School include:</h2>
            
            <div className="overlay-list-container">
              <ul className="overlay-list">
                <li>English</li>
                <li>Hindi</li>
                <li>Second Language/Third Language</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Science</li>
                <li>Computer Science</li>
                <li>General Knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Student Assessment Section */}
    <section className="text-primary-list">
      <div className="text-list">
        <h1>Student Assessment</h1>
        <p>
          Reports on conduct, academic, and co-curricular progress are sent to parents at the end of each term. 
          Parents are encouraged to meet the class teacher and principal after prior appointment for detailed discussions.
        </p>
        <p>
          Grades V, VI, and VII have term-based assessments:
        </p>
        <ul>
          <li>Term I: Wednesday Tests + Mid-Term Examination</li>
          <li>Term II: Wednesday Tests + Annual Examination</li>
        </ul>
        <p>
          In Mid-Term and Final Exams, a written assessment is conducted with marks distributed as follows: 
          80 marks for exams and 20 marks for periodic tests, multiple assessments, and activities. 
          The final exam encompasses significant topics from the first term and the complete second-term syllabus.
        </p>
        <p>
          Students are also graded for their performances in sports and arts activities.
        </p>
      </div>
    </section>
   </div>
   </>
  )
}

export default MiddleSchool;
