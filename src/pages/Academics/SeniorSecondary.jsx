import React from 'react';
import "../../Css/SeniorSecondary.css";

const SeniorSecondary = () => {
  return (
    <>
      <div className="senior-secondary-container">
        <div className="headline">
          <p className="primary-text">Awards and Recognition</p>
        </div>

        {/* Section for Class I and II Awards */}
        <section className="awards-section">
          <h2 className="awards-heading">Class I and II Awards</h2>
          <ul className="awards-list">
            <li><strong>100% Attendance Award:</strong> Certificate awarded for 100% attendance at the end of the academic year.</li>
            <li><strong>Good Conduct Award:</strong> Award for Exemplary Behaviour.</li>
            <li><strong>Merit Award:</strong> Awarded to children who secure ‘O’ in English, Second Language, Mathematics, or EVS in the final evaluation.</li>
          </ul>
        </section>

        {/* Section for Class III and IV Awards */}
        <section className="awards-section">
          <h2 className="awards-heading">Class III and IV Awards</h2>
          <ul className="awards-list">
            <li><strong>100% Attendance Award:</strong> Certificate awarded for 100% attendance at the end of the academic year.</li>
            <li><strong>Good Conduct Award:</strong> Award for Exemplary Behaviour.</li>
            <li><strong>Certificate of Academic Excellence:</strong> Awarded to children achieving 15 A+ grades or a combination of O and A+ grades in academic subjects.</li>
            <li><strong>Scholar Badge:</strong> Awarded to children achieving 15 O’s in five academic subjects.</li>
            <li><strong>Overall Improvement Award:</strong> Awarded for showing academic improvement throughout the year.</li>
          </ul>
        </section>

        {/* Section for Class V to XII Awards */}
        <section className="awards-section">
          <h2 className="awards-heading">Class V to XII Awards</h2>
          <ul className="awards-list">
            <li><strong>100% Attendance Award:</strong> Certificate awarded for 100% attendance at the end of the academic year.</li>
            <li><strong>Good Conduct Award:</strong> Award for Exemplary Behaviour.</li>
            <li><strong>Merit Award:</strong> Awarded to children securing 90% and above in English, Second Language, Mathematics, Science, and Social Science.</li>
            <li><strong>Proficiency Awards:</strong> Awarded to children securing the highest marks in any subject in their class.</li>
            <li><strong>Scholar Badge:</strong> Awarded for achieving a minimum of 90% in all subjects, 90% attendance, and no absences during assessments.</li>
            <li><strong>Honour Badge:</strong> Special badge for students receiving Scholar Badges for two consecutive years.</li>
            <li><strong>Blue Blazer:</strong> Awarded for receiving Scholar Badges for three consecutive years.</li>
            <li><strong>Overall Improvement Award:</strong> Awarded for showing academic improvement throughout the year.</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default SeniorSecondary;
