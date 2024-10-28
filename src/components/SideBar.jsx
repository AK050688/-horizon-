import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  FaHome,
  FaScroll,
  FaBuilding,
  FaGraduationCap,
  FaUserFriends,
  FaRunning,
  FaNewspaper,
  FaSuitcase,
  FaPhone,
  FaInfoCircle,
  FaUserCircle,
} from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { RiCloseFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

export function MultiLevelSidebar({ setIsMenuOpen }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="w-full p-4 shadow-xl shadow-blue-gray-900/5">
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-4 right-4 text-3xl text-gray-600 hover:bg-transparent hover:scale-125 focus:shadow-none"
      >
        <RiCloseFill />
      </button>
      <List className="mt-12">
        {/* Home */}
        <Link to="/">
          <ListItem>
            <ListItemPrefix>
              <FaHome className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
        </Link>

        {/* About Us */}
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform bg-${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0 " selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3 hover:bg-gray-300"
            >
              <ListItemPrefix>
                <FaInfoCircle className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal ">
                About Us
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 text-sm">
              <Link to="/about/our-school">
                <ListItem>Our School</ListItem>
              </Link>
              <Link to="/about/vision-mission">
                <ListItem>Vision and Mission</ListItem>
              </Link>
              <Link to="/about/dps-society">
                <ListItem>DPS Society</ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        {/* Circular */}
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3 hover:bg-gray-300"
            >
              <ListItemPrefix>
                <FaScroll className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Circular
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to="/circular/academic">
                <ListItem>Academic</ListItem>
              </Link>
              <Link to="/circular/non-academic">
                <ListItem>Non Academic</ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        {/* Hostel */}
        <Link to="/hostel">
          <ListItem>
            <ListItemPrefix>
              <FaBuilding className="h-5 w-5" />
            </ListItemPrefix>
            Hostel
          </ListItem>
        </Link>

        {/* Our Campus */}
        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 3 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3 hover:bg-gray-300"
            >
              <ListItemPrefix>
                <FaGraduationCap className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Our Campus
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to="/campus/facilities">
                <ListItem>Facilities</ListItem>
              </Link>
              <Link to="/campus/gallery">
                <ListItem>Gallery</ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        {/* Admission */}
        <Accordion
          open={open === 4}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 4 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 4}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="border-b-0 p-3 hover:bg-gray-300"
            >
              <ListItemPrefix>
                <FaUserFriends className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Admission
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to="/admission/process">
                <ListItem>Admission Process</ListItem>
              </Link>
              <Link to="/admission/form">
                <ListItem>Admission Form</ListItem>
              </Link>
              <Link to="/admission/hostel-form">
                <ListItem>Hostel Form</ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        {/* Academics */}
        <Accordion
          open={open === 5}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 5 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 5}>
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="border-b-0 p-3 hover:bg-gray-300"
            >
              <ListItemPrefix>
                <FaGraduationCap className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Academics
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to="/academics/primary">
                <ListItem>Primary</ListItem>
              </Link>
              <Link to="/academics/middle-school">
                <ListItem>Middle School</ListItem>
              </Link>
              <Link to="/academics/secondary">
                <ListItem>Secondary</ListItem>
              </Link>
              <Link to="/academics/senior-secondary">
                <ListItem>Senior Secondary</ListItem>
              </Link>
              <Link to="/academics/scholars-badge">
                <ListItem>Scholar&apos;s Badge</ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        {/* Activities */}
        <Accordion
          open={open === 6}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 6 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 6}>
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className="border-b-0 p-3 hover:bg-gray-300"
            >
              <ListItemPrefix>
                <FaRunning className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Activities
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to="/activities/student-council">
                <ListItem>Student Council</ListItem>
              </Link>
              <Link to="/activities/co-curricular">
                <ListItem>Co-Curricular</ListItem>
              </Link>
              <Link to="/activities/arts">
                <ListItem>Arts</ListItem>
              </Link>
              <Link to="/activities/sports">
                <ListItem>Sports</ListItem>
              </Link>
              <Link to="/activities/clubs">
                <ListItem>Clubs</ListItem>
              </Link>
              <Link to="/activities/field">
                <ListItem>Field Trips & Excursions</ListItem>
              </Link>
              <Link to="/activities/assemblies">
                <ListItem>Assemblies</ListItem>
              </Link>
              <Link to="/activities/newsletter">
                <ListItem>Newsletter</ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        {/* News & Events */}
        <Link to="/news-events">
          <ListItem>
            <ListItemPrefix>
              <FaNewspaper className="h-5 w-5" />
            </ListItemPrefix>
            News & Events
          </ListItem>
        </Link>

        {/* Career */}
        <Link to="/career">
          <ListItem>
            <ListItemPrefix>
              <FaSuitcase className="h-5 w-5" />
            </ListItemPrefix>
            Career
          </ListItem>
        </Link>

        {/* Staff corner */}
        <Accordion
          open={open === 7}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 7 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 7}>
            <AccordionHeader
              onClick={() => handleOpen(7)}
              className="border-b-0 p-3 hover:bg-gray-300"
            >
              <ListItemPrefix>
                <FaUserCircle className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Staff Corner
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 text-sm">
              <Link to="/staff-corner/enrichment">
                <ListItem>Staff Enrichment Corner</ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        {/* Contact Us */}

        <Link to="/contactus">
          <ListItem>
            <ListItemPrefix>
              <FaPhone className="h-5 w-5" />
            </ListItemPrefix>
            Contact Us
          </ListItem>
        </Link>
        <Link to="/dashboard">
          <ListItem>
            <ListItemPrefix>
              <MdDashboard className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}
