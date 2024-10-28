import React, { useEffect } from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


import Slider1 from "../../assets/slider/Slider1.jpg"
import Slide2 from "../../assets/slider/scroll02.jpg";
import Slide_7 from "../../assets/slider/Slider_7.jpg";
import Slide7 from "../../assets/slider/scroll07.jpg";
import Slide11 from "../../assets/slider/scroll11.jpg";
import Slide12 from "../../assets/slider/scroll12.jpg";
import horizonlogo from "../../assets/slider/horizonlogo.webp"

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-16");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      "#beyond-classroom h2, #beyond-classroom p, #beyond-classroom .group"
    );
    elements.forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <>
      <section className="max-w-full mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="relative w-full"
          style={{ height: "auto" }}
        >
          {[Slider1, Slide2, Slide_7, Slide7, Slide11, Slide12].map(
            (slide, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="w-full lg:h-[450px] md:h-[300px] h-[300px]">
                  <img
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://dummyimage.com/800x400/cccccc/000000&text=Image+Not+Available";
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </section>

      <section className="lg:flex items-center text-white">
        <h3 className="bg-[#F68D0A] text-center font-bold p-3 text-xl w-full lg:w-5/12 hidden sm:block">
          Updates
        </h3>
        <div className=" py-3 px-4 bg-[#FBC02D]">
          <marquee direction="left" className="flex items-center text-xl">
            <a
              className="ml-14"
              href="https://dpskollam.com/class-xi-entrance-test-external-candidates/"
              target="_self"
            >
              Admission open for Class XI – Science, Commerce and Humanities
              Stream (Please contact school office)
            </a>
            <a
              className="ml-14"
              href="https://dpskollam.com/wp-content/uploads/2023/11/DPS-Kollam-Brochure_compressed.pdf"
              target="_blank"
            >
              Brochure – KG to Class XII
            </a>
            Admissions open for Nursery to Class XI
            <a
              className="ml-14"
              href="https://dpskollam.com/?page_id=7836&amp;preview=true"
              target="_blank"
            >
              Summer Bonanza 2024
            </a>
          </marquee>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-screen-2xl px-5 2xl:px-0 py-9 md:flex items-center gap-6 m-auto">
        <div className="md:w-1/2 w-full">
          <h2 className="md:text-4xl text-3xl text-[#F68D0A] ">
            Welcome to <br /> New Horizon Public School
          </h2>
          <p className="text-justify text-base md:text-lg mt-4">
          New Horizon Public School in Pathargama, Godda, Bihar, is committed to fostering a holistic approach towards educating children and shaping them into tomorrow's responsible global citizens. It is a residential cum day-boarding school nestled in the peaceful surroundings of Pathargama. The school offers excellence in formal education in the K12 format, adhering to the CBSE curriculum. It encourages students to achieve their academic, social, and emotional potential in a nurturing environment, promoting individual confidence through a balanced mix of academic and co-curricular activities.
          </p>
        </div>
        <div className="md:w-1/2 md:mt-0 mt-5 w-full h-96 bg-[#FEF4D7] rounded-lg overflow-hidden relative">
          <div className=" bg-[#F68D0A] p-1 rounded-lg absolute top-2 right-1/2 translate-x-1/2 text-white">
            <nav>
              <ul className="flex items-center gap-2">
                <li className="dropdown relative p-2 rounded-lg text-nowrap bg-[#FBC02D] cursor-pointer">
                  <span>Outdoor</span>
                  <ul className="dropdown-content ">
                    <li>Main Gate</li>
                    <li>Way to Reception</li>
                    <li>Parking Area</li>
                    <li>Reception Front</li>
                    <li>Near Play Ground</li>
                    <li>Near Canteen</li>
                    <li>Lab Entrance</li>
                    <li>Way to Hotel</li>
                  </ul>
                </li>
                <li className="dropdown relative p-2 rounded-lg text-nowrap hover:bg-[#FBC02D] cursor-pointer">
                  <span>Academic</span>
                  <ul className="dropdown-content  ">
                    <li>Reception</li>
                    <li>Office Room</li>
                    <li>Reception Corner</li>
                    <li>Jr. Kindergarten-Front</li>
                    <li>Way to first floor</li>
                    <li>Sr. Kindergarten & Infirmary front</li>
                    <li>Infirmary & Counsellor</li>
                    <li>First Floor</li>
                    <li>Chairman Lounge</li>
                    <li>Classroom Grade-I</li>
                    <li>Library</li>
                  </ul>
                </li>
                <li className="dropdown relative p-2 rounded-lg text-nowrap hover:bg-[#FBC02D] cursor-pointer">
                  <span>Indoor Game</span>
                  <ul className="dropdown-content  ">
                    <li>Canteen Entrance</li>
                    <li>Canteen</li>
                    <li>Indoor Games Entrance</li>
                    <li>Squash Front</li>
                    <li>Soccer & Billiards</li>
                    <li>Shooting club</li>
                    <li>Pre School</li>
                    <li>Fitness Room Corridor</li>
                    <li>Second Floor Stair Landing</li>
                  </ul>
                </li>
                <li className="dropdown relative p-2 rounded-lg text-nowrap hover:bg-[#FBC02D] cursor-pointer">
                  <span>Hostel</span>
                  <ul className="dropdown-content  ">
                    <li>Hostel Entrance</li>
                    <li>Hostel Reception</li>
                    <li>Reception Entrance</li>
                    <li>Dormitory Entrance</li>
                    <li>Dormitory</li>
                    <li>Dormitory Study Room</li>
                    <li>Dormitory Restroom</li>
                    <li>Hostel Room Entrance</li>
                    <li>Hostel Room</li>
                    <li>Leisure Room Entrance</li>
                    <li>Leisure Room</li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials bg-[#fff7e8]">
        <div className="max-w-screen-2xl m-auto px-5 2xl:px-0 py-9 md:flex items-center gap-6">
          <div className="md:w-1/4 lg:w-96 w-full mb-4 lg:mb-0">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 5000 }}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-[#F68D0A]">
                    Mr. Rajesh Kumar
                  </h3>
                  <p className="text-gray-600 mb-4">
              New Horizon Public School provides an exceptional environment where my child feels valued and supported. The teachers are dedicated and understanding, offering a balanced approach to both academics and extracurricular activities. I appreciate the school’s commitment to nurturing each student’s potential, making it a true second home for my child.
                  </p>
                  <h3 className="font-medium text-[#F68D0A]">
                    Parent of Anish Kumar (Grade V)
                  </h3>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-[#F68D0A]">
                    Mrs. Priya Sharma
                  </h3>
                  <p className="text-gray-600 mb-4">
                  In just a short time, New Horizon Public School has become a cornerstone of excellence in education. The confidence my children exhibit, thanks to the comprehensive curriculum and the strong emphasis on personal development, is truly remarkable. The supportive staff and the variety of opportunities available for students make this school outstanding.
                  </p>
                  <h3 className="font-medium text-[#F68D0A]">
                    Parent of Riya Sharma (Grade IX) and Aarav Sharma (Grade IV)
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="w-full h-full">
            <img
              className="w-full h-auto "
              src=""
              alt="dps achievement"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://davkhagaul.org/File/5647//Photo_Big_546bcf92-6f94-46b7-99cd-99007395beb7_5.jpg";
              }}
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-auto "
              src=""
              alt="dps achievement"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                "https://davkhagaul.org/File/5647//Photo_Big_0ff24eea-9566-4491-9798-9813195a5637_6.jpg";
              }}
            />
          </div>
        </div>
      </section>

      {/* <section className="youtube md:h-[435px] bg-fixed bg-cover bg-center">
        <div className="max-w-screen-2xl px-5 2xl:px-0 py-9 md:flex items-center gap-9 m-auto">
          <div className="text-white md:w-1/2 w-full">
            <h2 className="sm:text-5xl text-4xl mb-2 text-balance">
              A World of Possibilities Awaits...
            </h2>
            <p className="text-lg text-justify">
             At New Horizon Public School, we are dedicated to empowering our students to embrace every opportunity that comes their way. With a strong emphasis on academic excellence and a diverse range of extracurricular activities, we ensure that our students are well-equipped to develop the essential skills they will carry into their future endeavors.
            </p>
          </div>
          <div className="video-container md:w-1/2 w-full md:mt-0 mt-5 flex justify-center">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/wKcUZfZka1s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section> */}

      {/* Discovering Talents */}

      <section id="beyond-classroom" className="bg-[#f2f2f2] overflow-hidden">
        <div className="max-w-screen-2xl px-5 2xl:px-0 py-9 m-auto">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl text-[#F68D0A] sm:text-5xl font-medium opacity-0 translate-y-16 transition-all duration-700 ease-out">
              Holistic Development
            </h2>
            <p className="text-lg mt-3 w-full sm:w-3/4 lg:w-1/2 opacity-0 translate-y-16 transition-all duration-700 delay-200 ease-out">
At New Horizon Public School, we understand that every child has unique talents and potential. Our goal is to nurture these individual strengths through a comprehensive curriculum that combines academic excellence with personal growth and extracurricular engagement.


            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-10 justify-items-center">
            {[
              {
                img: "https://dpskollam.com/wp-content/uploads/2019/08/004.png",
                title: "A secure campus with excellent green cover",
              },
              {
                img: "https://dpskollam.com/wp-content/uploads/2019/09/theatre.png",
                title: "Two beautifully laid out theaters",
              },
              {
                img: "https://dpskollam.com/wp-content/uploads/2019/09/library.png",
                title: "Library equipped with a wide range of books",
              },
              {
                img: "https://dpskollam.com/wp-content/uploads/2019/08/003.png",
                title: "Robotics & STEM Education",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative w-40 sm:w-52 group transform opacity-0 translate-y-16 transition-all duration-700 delay-300 ease-out ${
                  idx % 2 !== 0 ? "sm:-ml-5" : ""
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    className="border-8 border-white rounded-full"
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/400?text=Image+Not+Available";
                    }}
                  />
                </div>
                <h3 className="uppercase text-center mt-3 font-semibold text-sm">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News and Events Section */}
      <section className="bg-[#e7e7e7] md:py-12 py-4">
        <div className="max-w-screen-2xl px-5 2xl:px-0 py-9 m-auto">
          <h3 className="text-center md:text-5xl text-3xl mb-8 text-[#F68D0A]">
            News & Events
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                img: "https://dpskollam.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-18-at-06.04.17-768x768.jpeg",
                title: "ACHIEVEMENTS",
                link: "#",
              },
              {
                img: "https://dpskollam.com/wp-content/uploads/2024/10/Meraki-back-1_page-0001-550x550.jpg",
                title: "UPCOMING EVENTS",
                link: "#",
              },
              {
                img: "https://dpskollam.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-15-at-06.34.37-768x768.jpeg",
                title: "ONAM CELEBRATION 2024",
                link: "#",
              },
              {
                img: "",
                title: "EUPHORIA 2024",
                link: "#",
              },
              {
                img: "https://dpskollam.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-25-at-8.30.29-PM-550x550.jpeg",
                title: "All Kerala Squash Championship-2024",
                link: "#",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <a
                  href={item.link}
                  className="border-2 border-white rounded-lg p-2 overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/400?text=Image+Not+Available";
                    }}
                    className="w-full rounded-lg object-cover hover:scale-105  transition duration-500 ease-in-out"
                  />
                </a>
                <a href={item.link} className="mt-4 text-lg font-semibold">
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner section */}
      <section>
        <div className="max-w-screen-2xl px-5 2xl:px-0 py-9 m-auto">
          <h3 className="text-center md:text-4xl sm:text-3xl text2x mb-4 text-[#F68D0A]">
            Our Enrichment Partners
          </h3>
          <div className="w-full">
            <img
              className="m-auto"
              src="https://dpskollam.com/wp-content/uploads/2022/08/Our-Enrichment-Partners.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
