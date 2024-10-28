import React from 'react';
import "../../Css/Secondary.css";

const Secondary = () => {
  return (
    <>
      <div className="secondary-container">
        <div className="headline">
          <p className="primary-text">Secondary School</p>
        </div>

        
        {/* second image section */}
<section className='secondarySectoin'>
<div className="container-secondery">
    <img src="https://dpskollam.com/wp-content/uploads/2021/04/11.jpg" alt="" />
  </div>

  <div className="text-seconday-class">
    <p className="text-class">The School follows the CBSE curriculum and students use the NCERT textbooks. A comprehensive pattern of formative and summative assessments is followed for evaluation. In addition to academics, life skills and values are also assessed.</p>

    <ul>
      <li>For Class IX and X special/extra classes are conducted after school hours.</li>
      <li>Innovative and interactive workshops are conducted on issues related to adolescence.</li>
      <li>Career Counselling also forms an integral part of their activities at this level.</li>
      <li>Students are encouraged to participate in a wide range of inter-house and inter-school competitions in cultural and sporting activities.</li>
    </ul>
  </div>

  <div className="assesment">
    <div className="list-of-assisment">
      <h1 className='heading-assesmsnet'>ASSESSMENT:</h1>
      <p className="assesment-text">Students of Classes IX-X are evaluated on the basis of class tests, mid-term assessments, and term exams in a given academic year. In addition to this class IX, X & XII have a Pre Board Model Examination.</p>
      <p className="bolder-text">Co-Curricular activities:</p>
      <p className="text-activities">At  DPS Kollam, Physical Education, Arts Education, and Robotics are given due importance and extensive training of each discipline forms an integral part of the curriculum.</p>
    </div>
  </div>

</section>
 

      
      </div>
    </>
  );
}

export default Secondary;
