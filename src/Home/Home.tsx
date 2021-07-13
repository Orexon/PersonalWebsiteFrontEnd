import { useState } from "react";
import About from "../About/About";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import { educationImg } from "../HelperComponents/imgData";
import ScrollToTop from "../HelperComponents/ScrollToTop";
import Interests from "../Interests/Interests";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Skills from "../Skills/Skills";

const Home = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const toggleSidebarModal = () => {
        setOpenSidebar(!openSidebar);
    };

    return (
        <>
            <ScrollToTop />
            <Sidebar
                openSidebar={openSidebar}
                toggleSidebarModal={toggleSidebarModal}
            />
            <Navbar
                openSidebar={openSidebar}
                toggleSidebarModal={toggleSidebarModal}
            />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Interests />
        </>
    );
};

export default Home;
