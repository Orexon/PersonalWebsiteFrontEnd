import { useState } from "react";
import About from "../About/About";
import ScrollToTop from "../HelperComponents/ScrollToTop";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";


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
        </>
    );
};

export default Home;
