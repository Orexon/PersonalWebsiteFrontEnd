import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

interface IProps {
    toggleSidebarModal: (open: boolean) => void;
    openSidebar: boolean;
}

const Header = (props: IProps) => {
    return (
        <>
            <Sidebar
                openSidebar={props.openSidebar}
                toggleSidebarModal={props.toggleSidebarModal}
            />
            <Navbar
                openSidebar={props.openSidebar}
                toggleSidebarModal={props.toggleSidebarModal}
            />
        </>
    );
};

export default Header;
