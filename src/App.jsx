import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Payment from "./pages/Payments/Payment";
import OurSchool from "./pages/AboutUs/OurSchool";
import Vission from "./pages/AboutUs/Vission";
import Society from "./pages/AboutUs/Society";
import Academic from "./pages/Circular/Academic";
import NonAcademic from "./pages/Circular/NonAcademic";
import Hostel from "./pages/Hostel/Hostel";
import Facilities from "./pages/OurCampus/Facilities";
import Gallery from "./pages/OurCampus/Gallery";
import AdmissionProcess from "./pages/Admission/AdmissionProcess";
import AdmissionForm from "./pages/Admission/AdmissionForm";
import HostelForm from "./pages/Admission/HostelForm";
import Primary from "./pages/Academics/Primary";
import MiddleSchool from "./pages/Academics/MiddleSchool";
import Secondary from "./pages/Academics/Secondary";
import SeniorSecondary from "./pages/Academics/SeniorSecondary";
import ScholarsBadge from "./pages/Academics/ScholarsBadge";
import StudentCouncil from "./pages/Activities/StudentCouncil";
import CoCurricular from "./pages/Activities/CoCurricular";
import Arts from "./pages/Activities/Arts";
import Sports from "./pages/Activities/Sports";
import Clubs from "./pages/Activities/Clubs";
import FieldTrips from "./pages/Activities/FieldTrips";
import Assemblies from "./pages/Activities/Assemblies";
import NewsLetter from "./pages/Activities/NewsLetter";
import NewsEvent from "./pages/NewsEvents/NewsEvent";
import Career from "./pages/Career/Career";
import StaffEnrichment from "./pages/StaffCorner/StaffEnrichment";
import ContactUs from "./pages/Contact/ContactUs";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Dashboard from "./pages/Dashboard/Dashboard";

import TeacherRegistration from "./pages/Dashboard/Registration/TeacherRegistration";
import Sidebar from "./pages/Dashboard/Sidebar";
import StudentRegistration from "./pages/Dashboard/Registration/StudentRegistration";
import StudentList from "./pages/Dashboard/AllList/StudentList";
import TeacherList from "./pages/Dashboard/AllList/TeacherList";
import AdmissionDetails from "./pages/Dashboard/AdmissionDetails";
import Schedule from "./pages/Dashboard/Schedule";
import StudentAttendance from "./pages/Dashboard/StudentAttendance";
import AllFeesLists from "./pages/Dashboard/AllFeesLists";
import AllExamLists from "./pages/Dashboard/AllExamLists";
import StudentLogin from "./pages/Login/StudentLogin";

import TeacherLogin from "./pages/Login/TeacherLogin";
import PrincipleLogin from "./pages/Login/PrincipleLogin";
import Assignment from "./pages/Dashboard/Assignment";
import TeachersDasbords from "./pages/TeachersDashbord/DashbordTeacher/TeachersDasbords";
import DashbordStudents from "./pages/StudentsDashbord/StudentDashbord/DashbordStudents";
import AttendanceTeacher from "./pages/TeachersDashbord/DashbordTeacher/AttendanceTeacher";
import ExamTeachers from "./pages/TeachersDashbord/DashbordTeacher/ExamTeachers";
import NotificationTeacher from "./pages/TeachersDashbord/DashbordTeacher/NotificationTeacher";
import TestTeacher from "./pages/TeachersDashbord/DashbordTeacher/TestTeacher";
import ScheduleTeachers from "./pages/TeachersDashbord/DashbordTeacher/ScheduleTeachers";
import SyllabusTeachers from "./pages/TeachersDashbord/DashbordTeacher/SyllabusofTeachers"
import SidebarTeacher from "./pages/TeachersDashbord/SidebarTeacher";

// import SyllabusTeachers from "./pages/TeachersDashbord/DashbordTeacher/SyllabusTeachers"


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Payment */}
        <Route path="/payment" element={<Payment />} />

        {/* About Us */}
        <Route path="/about/our-school" element={<OurSchool />} />
        <Route path="/about/vision-mission" element={<Vission />} />
        <Route path="/about/dps-society" element={<Society />} />

        {/* Circular */}
        <Route path="/circular/academic" element={<Academic />} />
        <Route path="/circular/non-academic" element={<NonAcademic />} />

        {/* Hostel */}
        <Route path="/hostel" element={<Hostel />} />

        {/* Our Campus */}
        <Route path="/campus/facilities" element={<Facilities />} />
        <Route path="/campus/gallery" element={<Gallery />} />

        {/* Admission */}
        <Route path="/admission/process" element={<AdmissionProcess />} />
        <Route path="/admission/form" element={<AdmissionForm />} />
        <Route path="/admission/hostel-form" element={<HostelForm />} />

        {/* Academics */}
        <Route path="/academics/primary" element={<Primary />} />
        <Route path="/academics/middle-school" element={<MiddleSchool />} />
        <Route path="/academics/secondary" element={<Secondary />} />
        <Route
          path="/academics/senior-secondary"
          element={<SeniorSecondary />}
        />
        <Route path="/academics/scholars-badge" element={<ScholarsBadge />} />
        {/* Activities */}
        <Route
          path="/activities/student-council"
          element={<StudentCouncil />}
        />
        <Route path="/activities/co-curricular" element={<CoCurricular />} />
        <Route path="/activities/arts" element={<Arts />} />
        <Route path="/activities/sports" element={<Sports />} />
        <Route path="/activities/clubs" element={<Clubs />} />
        <Route path="/activities/field" element={<FieldTrips />} />
        <Route path="/activities/assemblies" element={<Assemblies />} />
        <Route path="/activities/newsletter" element={<NewsLetter />} />

        {/* News & Events */}
        <Route path="/news-events" element={<NewsEvent />} />

        {/* Career */}
        <Route path="/career" element={<Career />} />

        {/* Staff Corner */}
        <Route path="/staff-corner/enrichment" element={<StaffEnrichment />} />

        {/* Contact Us */}
        <Route path="/contactus" element={<ContactUs />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studentLogin" element={<StudentLogin/>} />
        <Route path="/TeacherLogin" element={<TeacherLogin/>} />
        <Route path="/principalLogin" element={<PrincipleLogin/>} />

 



  <Route path="/TeacherRegistration" element={
    <div className="flex">
    <Sidebar /> {/* Show Sidebar here */}
    <div className="ml-59 p-9 w-full">
      <TeacherRegistration />
    </div>
  </div>
  
  }/>


<Route path="/StudentRegistration" element={
    <div className="flex">
    <Sidebar /> {/* Show Sidebar here */}
    <div className="ml-59 p-9 w-full">
    <StudentRegistration/>
    </div>
  </div>
  
  }/>



<Route path="/StudentList" element={
    <div className="flex">
    <Sidebar /> {/* Show Sidebar here */}
    <div className="ml-59 p-9 w-full">
   <StudentList/>
    </div>
  </div>
  
  }/>

  
<Route path="/TeacherList" element={
    <div className="flex">
    <Sidebar /> 
    <div className="ml-59 p-9 w-full">
  <TeacherList/>
    </div>
  </div>
  
  }/>




  
<Route path="/AdmissionDetails" element={
    <div className="flex">
    <Sidebar /> {/* Show Sidebar here */}
    <div className="ml-59 p-9 w-full">
 <AdmissionDetails/>
    </div>
  </div>
  
  }/>


  
<Route path="/Schedule" element={
    <div className="flex">
    <Sidebar /> {/* Show Sidebar here */}
    <div className="ml-59 p-9 w-full">
    <Schedule/>
    </div>
  </div>
  
  }/>



    
<Route path="/AllExamLists" element={
    <div className="flex">
    <Sidebar /> {/* Show Sidebar here */}
    <div className="ml-59 p-9 w-full">
 <AllExamLists/>
    </div>
  </div>
  
  }/>

<Route path="/StudentAttendance" element={
    <div className="flex">
    <Sidebar /> {/* Show Sidebar here */}
    <div className="ml-59 p-9 w-full">
  <StudentAttendance/>
    </div>
  </div>
  
  }/>
  
<Route path="/AllFeesLists" element={
    <div className="flex">
    <Sidebar /> {/* Show Sidebar here */}
    <div className="ml-59 p-9 w-full">
 <AllFeesLists/>
    </div>
  </div>
  
  }/>
  
<Route path="/assignments" element={
    <div className="flex">
    <Sidebar /> {/* Show Sidebar here */}
    <div className="ml-59 p-9 w-full">
<Assignment/>
    </div>
  </div>
  
  }/>


{/* ========================================teacherDashbord================= */}

<Route path="/teachersdashboard" element={<TeachersDasbords/>} />

<Route path="/AssinmentsTeacher" element={<TeachersDasbords/>} />
<Route path="/AttendanceTeacher" element={
     <div className="flex">
  <SidebarTeacher/>
     <div className="ml-59 p-9 w-full">
     <AttendanceTeacher/>
     </div>
   </div>
  
 } />


<Route path="/ExamTeachers" element={
       <div className="flex">
     <SidebarTeacher/>

       <div className="ml-59 p-9 w-full">
       <ExamTeachers/>
       </div>
     </div>
  
 } />


<Route path="/NotificationTeacher" element={
  
  <div className="flex">
  <SidebarTeacher/>

  <div className="ml-59 p-9 w-full">
  <NotificationTeacher/>
  </div>
</div>
 } />


<Route path="/ScheduleTeachers" element={
  
  <div className="flex">
  <SidebarTeacher/>

  <div className="ml-59 p-9 w-full">
  <ScheduleTeachers/>
  </div>
</div>
} />


<Route path="/SyllabusTeachers" element={
    <div className="flex">
  <SidebarTeacher/>

    <div className="ml-59 p-9 w-full">
    <SyllabusTeachers/>
    </div>
  </div>
  } />

<Route path="/TestTeacher" element={
    <div className="flex">
  <SidebarTeacher/>

    <div className="ml-59 p-9 w-full">
    <TestTeacher/>
    </div>
  </div>
 } />





{/* ===============================studentDashbord======== */}
<Route path="/StudentDashbord" element={<DashbordStudents/>}/>


      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
