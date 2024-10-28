import React from 'react';
import "../../Css/Facilities.css";

const Facilities = () => {
  return (
    <>
      <div className="facilities-container">
        <div className="facilities-heading">
          <p>Facilities</p>
        </div>

        <section className="facilities-gallery">
          <div className="facility-item">
            <img src="https://dpskollam.com/wp-content/uploads/2019/09/ASW07990.JPG-1000x550.jpg" alt="Hostel" />
            <p>Hostel</p>
          </div>

          <div className="facility-item">
            <img src="https://dpskollam.com/wp-content/uploads/2019/08/03-1-1100x550.jpg" alt="Cafeteria" />
            <p>Cafeteria</p>
          </div>

          <div className="facility-item">
            <img src="https://dpskollam.com/wp-content/uploads/2019/09/ASW07941-1000x550.jpg" alt="Daycare" />
            <p>Daycare</p>
          </div>

          <div className="facility-item">
            <img src="https://dpskollam.com/wp-content/uploads/2019/09/ASW08202-1000x550.jpg" alt="Labs" />
            <p>Labs</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Facilities;
