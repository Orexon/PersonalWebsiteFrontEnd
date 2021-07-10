import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

interface IProps {
    toggleSidebarModal: (open: boolean) => void;
    openSidebar: boolean;
}

const App = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const toggleSidebarModal = () => {
        setOpenSidebar(!openSidebar);
    };
    return (
        <BrowserRouter>
            <Header
                openSidebar={openSidebar}
                toggleSidebarModal={toggleSidebarModal}
            />
            <Main />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
