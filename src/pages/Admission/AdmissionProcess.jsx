import React from 'react';
import "../../Css/AdmissionProcess.css";

const AdmissionProcess = () => {
  return (
    <>
      <div className="admission-container">
        {/* Heading */}
        <div className="admission-heading">
          <p>Admission Process</p>
        </div>

        {/* Step Process */}
        <div className="steps">
          <div className="step">
            <h3>Step 1</h3>
            <p>Fill the admission form</p>
          </div>
          <div className="step">
            <h3>Step 2</h3>
            <p>Interactive session with parent & child</p>
          </div>
          <div className="step">
            <h3>Step 3</h3>
            <p>Payment of fees within days</p>
          </div>
        </div>

        {/* Application form and required documents */}
        <section className="admission-details">
          <p>
            Application forms are available both online and in the admin office. (Incomplete forms will not be accepted) The following documents are to be submitted with the application form:
          </p>
          <ul>
            <li>Two recent passport size (6x4) photographs of the student.</li>
            <li>A copy of the Birth Certificate.</li>
            <li>A copy of the parents and student’s Aadhar card.</li>
            <li>Passport in the name of any of the parents or child.</li>
            <li>Certificate required for proficiency in Games/ Co-Curricular/ Outstanding Achievements (if any).</li>
            <li>Copy of marksheets of last annual exams (Grade 2 above).</li>
            <li>The hostel application form has to be filled for hostel admission.</li>
          </ul>
        </section>

        {/* Eligibility Section */}
        <section className="eligibility-section">
          <h2>Eligibility: Age as on 31st March of the academic year of admission</h2>
          <table>
            <thead>
              <tr>
                <th>GRADE</th>
                <th>AGE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Preschool/Nursery</td>
                <td>Between 2 years 6 months to 3 years 5 months</td>
              </tr>
              <tr>
                <td>LKG</td>
                <td>Between 3 years 6 months to 4 Years 5 months</td>
              </tr>
              <tr>
                <td>UKG</td>
                <td>Between 4 years 6 months to 5 Years 5 months</td>
              </tr>
              <tr>
                <td>I</td>
                <td>Between 5 years 6 months to 6 Years 5 months</td>
              </tr>
              <tr>
                <td>II</td>
                <td>Between 6 years 6 months to 7 years 5 months</td>
              </tr>
              <tr>
                <td>III</td>
                <td>Between 7 years 6 months to 8 Years 5 months</td>
              </tr>
              <tr>
                <td>IV</td>
                <td>Between 8 years 6 months to 9 Years 5 months</td>
              </tr>
              <tr>
                <td>V</td>
                <td>Between 9 years 6 months to 10 Years 5 months</td>
              </tr>
              <tr>
                <td>VI</td>
                <td>Between 10 years 6 months to 11 Years 5 months</td>
              </tr>
              <tr>
                <td>VII</td>
                <td>Between 11 years 6 months to 12 Years 5 months</td>
              </tr>
              <tr>
                <td>VIII</td>
                <td>Between 12 years 6 months to 13 Years 5 months</td>
              </tr>
              <tr>
                <td>IX</td>
                <td>Between 13 years 6 months to 14 Years 5 months</td>
              </tr>
              <tr>
                <td>X</td>
                <td>Between 14 years 6 months to 15 Years 5 months</td>
              </tr>
              <tr>
                <td>XI</td>
                <td>Between 15 years 6 months to 16 Years 5 months</td>
              </tr>
              <tr>
                <td>XII</td>
                <td>Between 16 years 6 months to 17 Years 5 months</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="tc-buttons">
          <div>
            <button>TC Formate</button>
            <button>TC Sample</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdmissionProcess;
