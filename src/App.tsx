import { Tooltip } from "antd";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import SettingButton from "src/components/SettingButton";
import Sidebar from "src/components/Sidebar";
import { useContextProvider } from "src/contexts/ContextProvider";
import { NavButton } from "./components/LinkButton";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

function App() {
    const { sidebar, toggleSidebar } = useContextProvider();

    return (
        <BrowserRouter>
            <div className="relative flex dark:bg-main-dark-bg">
                <SettingButton />
                <Sidebar />
                <div className={`dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full ${sidebar ? "ml-72" : "flex-2"}`}>
                    <nav className="fixed md:static w-full bg-main-bg dark:bg-main-dark-bg navbar z-10000">
                        <div className="relative flex justify-between p-2 md:mx-6">
                            <NavButton title="Menu" onClick={toggleSidebar} color={"black"} icon={<AiOutlineMenu />} />
                        </div>
                    </nav>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
