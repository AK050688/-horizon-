import React, { useState, useEffect } from "react";
import "./AboutSchool.css"

const OurSchool = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentImage, setCurrentImage] = useState(
    "https://dpskollam.com/wp-content/uploads/2023/07/shooting.jpg"
  ); // Default image

  const handleImageChange = (imageUrl) => {
    setCurrentImage(imageUrl);
    setActiveDropdown(null);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "In this short time, DPS Kollam has become a name to reckon with.",
    "We feel a tremendous sense of satisfaction when we see the confidence in our daughter.",
    "The amount of importance laid on sports activities is highly commendable.",
    "The staff is very professional and responsible.",
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <section className="about-school-section bg-white py-8">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center">
          {/* Left Side Text */}
          <div className="text-container md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
            New Horizon Public School
            </h2>
            <p className="text-gray-600 mb-4">
            New Horizon Public School, located in Pathargama, Godda, Bihar, believes in a holistic approach towards nurturing children into tomorrow’s responsible global citizens. It is a residential cum day-boarding school, nestled in the calm and serene surroundings of Pathargama, providing a peaceful environment for learning and growth.
            </p>
            <p className="text-gray-600 mb-4">
              The school provides excellence in formal education in K12 format
              and follows the CBSE curriculum. The school is poised to bring in
              progressive international curriculum soon. The school encourages
              its students to reach their academic, social and emotional
              potential in a supported independence and supportive environment.
            </p>
            <p className="text-gray-600">
              The composition of the academic, co-curricular, and pastoral life
              of the school is well balanced to promote individual confidence.
            </p>
          </div>

          {/* Right Side Image with Buttons */}
          <div className="image-container relative md:w-1/2">
            <div className="image-wrapper hover:animate-zoom">
              {/* Dynamically changing image */}
              <img
                src={currentImage}
                alt="Delhi Public School"
                className="rounded-lg shadow-lg w-full h-auto max-h-96"
              />
            </div>

            {/* Buttons on the image */}
            <div className="buttons-overlay absolute inset-0 flex justify-between items-start px-6 pt-6">
              <div className="buttons-container space-x-4 flex">
                {/* Button for Outdoor Games */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("outdoor")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="image-btn">Outdoor Games</button>
                  {activeDropdown === "outdoor" && (
                    <div className="dropdown-menu">
                      <ul>
                        <li
                          onClick={() =>
                            handleImageChange(
                              "https://davbsebpatna.org/File/4568//Photo_Big_bac29b72-303b-4e0a-8cfc-d7d083b24259_3.jpeg"
                            )
                          }
                        >
                          Football
                        </li>
                        <li
                          onClick={() =>
                            handleImageChange("https://davbsebpatna.org/File/4568//Photo_Big_65657bcd-d5c0-4a67-8311-fa0726840a4b_yoga-hero.jpg")
                          }
                        >
                          Cricket
                        </li>
                        <li
                          onClick={() =>
                            handleImageChange(
                              "https://davbsebpatna.org/File/4568//Photo_Big_65657bcd-d5c0-4a67-8311-fa0726840a4b_yoga-hero.jpg"
                            )
                          }
                        >
                          Basketball
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Button for Indoor Games */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("indoor")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="image-btn">Indoor Games</button>
                  {activeDropdown === "indoor" && (
                    <div className="dropdown-menu">
                      <ul>
                        <li
                          onClick={() =>
                            handleImageChange("https://davbsebpatna.org/File/4568//Photo_Big_9aeb8183-3ee5-422c-9109-34de6d77a4ca_WhatsApp%20Image%202022-05-21%20at%2012.14.43%20PM.jpeg")
                          }
                        >
                          Chess
                        </li>
                        <li
                          onClick={() =>
                            handleImageChange(
                              "https://davbsebpatna.org/File/4568//Photo_Big_8a9ae9c2-ce5c-4eaf-a5aa-b69b459c2813_WhatsApp%20Image%202022-05-21%20at%2012.13.52%20PM.jpeg"
                            )
                          }
                        >
                          Table Tennis
                        </li>
                        <li
                          onClick={() =>
                            handleImageChange(
                              "https://dpskollam.com/wp-content/uploads/2019/09/WhatsApp-Image-2024-03-14-at-12.07.31-PM-6-1536x864.jpeg"
                            )
                          }
                        >
                          Badminton
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Button for Academics */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("academic")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="image-btn">Academic</button>
                  {activeDropdown === "academic" && (
                    <div className="dropdown-menu">
                      <ul>
                        <li
                          onClick={() =>
                            handleImageChange(
                              "https://dpskollam.com/wp-content/uploads/2019/09/ASW07941.jpg"
                            )
                          }
                        >
                          Subjects
                        </li>
                        <li
                          onClick={() =>
                            handleImageChange("https://dpskollam.com/wp-content/uploads/2019/09/WhatsApp-Image-2024-03-14-at-12.07.33-PM-2-1536x864.jpeg")
                          }
                        >
                          Exams
                        </li>
                        <li
                          onClick={() =>
                            handleImageChange("https://dpskollam.com/wp-content/uploads/2019/09/WhatsApp-Image-2024-03-14-at-12.07.33-PM-2-1536x864.jpeg")
                          }
                        >
                          Results
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Button for Hostel */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("hostel")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="image-btn">Hostel</button>
                  {activeDropdown === "hostel" && (
                    <div className="dropdown-menu">
                      <ul>
                        <li
                          onClick={() =>
                            handleImageChange(
                              "https://dpskollam.com/wp-content/uploads/2019/09/WhatsApp-Image-2024-03-14-at-12.07.34-PM-1-1536x864.jpeg"
                            )
                          }
                        >
                          Boys Hostel
                        </li>
                        <li
                          onClick={() =>
                            handleImageChange(
                              "https://dpskollam.com/wp-content/uploads/2019/09/WhatsApp-Image-2024-03-14-at-12.07.32-PM-1-1536x864.jpeg"
                            )
                          }
                        >
                          Girls Hostel
                        </li>
                        <li
                          onClick={() =>
                            handleImageChange(
                              "https://dpskollam.com/wp-content/uploads/2019/08/03-1.jpg"
                            )
                          }
                        >
                          Hostel Activities
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-section bg-gray-100 py-12 px-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="slider-container md:w-1/3 p-0  rounded-lg  relative w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Parent's Feedback
            </h3>

            <div className="slider-content">
              <p className="text-gray-600 text-lg">{slides[currentSlide]}</p>
            </div>

            <button
              onClick={prevSlide}
              className="slider-control left absolute top-1/2 transform -translate-y-1/2 left-2  rounded-full px-2 py-1"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="slider-control right absolute top-1/2 transform -translate-y-1/2 right-2  rounded-full px-2 py-1"
            >
              ❯
            </button>

            <div className="dots flex justify-center mt-4 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${
                    currentSlide === index ? "active" : ""
                  } w-3 h-3 bg-gray-300 rounded-full`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </div>

          <div className="image-container md:w-1/3">
            <img
              src="https://davbsebpatna.org/File/4568/Message_5a44544c-5248-4a70-a0ce-dbcf30270f1c_Principalpatna.jpeg"
              alt="School Image"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div className="badge-image-container md:w-1/3 relative bg-blue-500 p-6 rounded-lg shadow-lg">
            <img
              src="https://davbsebpatna.org/File/4568//Slider_0227706c-105d-4a24-a605-826c178bbf7a_5.jpeg"
              alt="School with Badge"
              className="rounded-lg w-full h-auto"
            />
            <div className="badge absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Top Ranked
            </div>
          </div>
        </div>
      </section>

      <section className="custom-section  py-12">
        {/* Previous Section Code Here... */}

        {/* New Section */}
        <div className="opportunity-section  px-40">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            {/* Left Side Text */}
            <div className="text-container md:w-1/2">
              <h3 className="text-xl font-semibold text-white mb-4">
                A World of Opportunity Awaits...
              </h3>
              <p className="text-white text-lg">
              And we at New Horizon Public School want to help our children seize every opportunity. From excellence in the classroom to an impressive range of extracurricular activities, students can fully immerse themselves in developing valuable skills that they will use throughout their lives.
              </p>
            </div>

            {/* Right Side YouTube Video */}
            <div className="video-container md:w-1/2 flex justify-center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="new-section">
        <div className="container mx-auto px-14">
          {/* Horizontal Container for HeadlineandDescription */}

          <div className="text-panel">
            <div className="flex justify-between items-center gap">
              <h2 className="text-3xl font-bold text-gray-800 ">
                Beyond the Classroom
              </h2>

              <p className="text-gray-600 text-lg px-44">
                Our approach is to recognize that each child is different and
                can offer something new to the world. We help students to
                identify their individual strengths and create tailored
                opportunities to pursue them.
              </p>
            </div>
          </div>

          {/* Images Section */}
          <div className="image-containers grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {/* Image 1 */}
            <div className="circle-image-container">
              <img
                src="https://dpskollam.com/wp-content/uploads/2019/08/004.png"
                alt="Secure Campus"
                className="circle-image"
              />
              <div className="image-caption text-center">
                <h4 className="text-gray-700 font-semibold">
                  A secure campus with excellent green cover
                </h4>
                <p className="text-gray-500">CBSE School Apply now in Kollam</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="circle-image-container">
              <img
                src="https://dpskollam.com/wp-content/uploads/2019/08/004.png"
                alt="Theaters"
                className="circle-image"
              />
              <div className="image-caption text-center">
                <h4 className="text-gray-700 font-semibold">
                  Two beautifully laid out theaters
                </h4>
                <p className="text-gray-500">Schools in Kollam</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="circle-image-container">
              <img
                src="https://dpskollam.com/wp-content/uploads/2019/08/004.png"
                alt="Library"
                className="circle-image"
              />
              <div className="image-caption text-center">
                <h4 className="text-gray-700 font-semibold">
                  Library equipped with a wide range of books
                </h4>
                <p className="text-gray-500">CBSE School in Kollam</p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="circle-image-container">
              <img
                src="https://dpskollam.com/wp-content/uploads/2019/08/004.png"
                alt="Robotics & STEM"
                className="circle-image"
              />
              <div className="image-caption text-center">
                <h4 className="text-gray-700 font-semibold">Robotics & STEM</h4>
                <p className="text-gray-500">Robotics & STEM Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurSchool;
