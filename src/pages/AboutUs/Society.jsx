import React from "react";
import "../../Css/Society.css";
const Society = () => {
  return (
    <>
      <div className="society-container">
        <div className="society">
          <div>
            <p className="textsociety">New Horizon Public School Society</p>
          </div>
        </div>

        <section className="section-column">
          <div className="textsection">
            <p className="text-section-society ">
            New Horizon Public School is committed to providing quality education to children in Pathargama, Godda, Bihar. Our institution strives to create a nurturing environment that fosters holistic development and prepares students to thrive in a dynamic world.<br />

Since our inception, we have embraced excellent practices in education, guided by a dedicated team of educators who are passionate about nurturing young minds.<br />

Our philosophy centers around the belief that quality education should be accessible to all, driving our efforts to meet the diverse educational needs of our students.<br />

With a focus on academic excellence and personal growth, we aim to empower every child to reach their full potential.<br />

The governance of our school by experienced professionals ensures that we maintain high standards and adapt to the evolving educational landscape.<br />

As we grow and expand, New Horizon Public School is dedicated to becoming a leading institution in the region, contributing to a well-educated and enlightened society.
            </p>
          </div>
        </section>

        <section className="dividercostum">
          <div className="sectioncostum">
            <div className="imagelogo">
              <img
                src="https://dpskollam.com/wp-content/uploads/2019/09/Mr-VK-Shunglu-Chairman.png"
                alt="Chairman Image"
              />
            </div>

            <div className="textareasection">
              <p className="societysaintmichal">
                I warmly greet the parents and learners seeking to be associated
                with the school and am confident that the wonderful world of
                opportunities that they will discover in the scholastic and
                co-scholastic canvas of this school will be truly fulfilling.
              </p>
              <p>
                <strong>Mr.V.K. Shunglu, Chairman</strong>
                <br />
                New Horizon Public School society
              </p>
            </div>
          </div>
        </section>

        <section className="eventpic">
          <img
            src="https://dpskollam.com/wp-content/uploads/2019/08/Padma-Bhushan-2-1.jpg"
            alt="Society Event"
          />
        </section>
      </div>
    </>
  );
};

export default Society;
