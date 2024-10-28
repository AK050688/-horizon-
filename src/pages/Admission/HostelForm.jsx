import React from 'react';
import { FaDownload } from 'react-icons/fa';
import "../../Css/HostelForm.css"; 

const HostelForm = () => {
  return (
    <>
      <div className="hostel-form-container">

        <div className="hostel-form-heading">
          <p>Hostel Admission Form</p>
        </div>

        {/* Section for download link */}
        <section className="hostel-form-download">
          <div className="download-link-container">
            <a 
              href="/path-to-hostel-form.pdf" 
              download="Hostel_Admission_Form.pdf"
              className="download-link"
            >
              <FaDownload className="download-icon" />
              Click here to download a copy of the hostel admission form
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default HostelForm;
