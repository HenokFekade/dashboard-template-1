import { BrowserRouter, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import SettingButton from "src/components/SettingButton";
import { Tooltip } from "antd";
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from "react-icons/ai";
import { FiShoppingBag, FiEdit, FiPieChart } from "react-icons/fi";
import { BsKanban, BsBarChart } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { GiLouvrePyramid } from "react-icons/gi";
import { ReactNode } from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="relative flex dark:bg-main-dark-bg">
                <SettingButton />
                <div className="w-72 bg-white dark:bg-secondary-dark-bg fixed">
                    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
                        {/* sidebar header */}
                        <div className="justify-between flex items-center">
                            <div className="items-center gap-3 ml-3 mt-4 flex text-3xl font-extrabold tracking-tight dark:text-white text-slate-900">
                                <SiShopware /> <span>Dashboard</span>
                            </div>
                            <Tooltip placement="bottom" title="Menu">
                                <button type="button" className="p-3 text-3xl rounded-full hover:bg-light-gray block md:hidden">
                                    <MdOutlineCancel />
                                </button>
                            </Tooltip>
                        </div>
                        {/* sidebar nav links */}
                        <div className="w-full mt-10">
                            <p className="uppercase text-gray-400 dark:text-gray-400 m-3 mt-4">Dashboard</p>
                            <LinkButton to="ecommerce" icon={<FiShoppingBag />} title="ecommerce" />
                            <p className="uppercase text-gray-400 dark:text-gray-400 m-3 mt-4">pages</p>

                            <LinkButton title="orders" to="orders" icon={<AiOutlineShoppingCart />} />
                            <LinkButton title="employees" to="employees" icon={<IoMdContacts />} />
                            <LinkButton title="customers" to="customers" icon={<RiContactsLine />} />
                            <p className="uppercase text-gray-400 dark:text-gray-400 m-3 mt-4">Apps</p>
                            <LinkButton title="calendar" to="calendar" icon={<AiOutlineCalendar />} />
                            <LinkButton title="kanban" to="kanban" icon={<BsKanban />} />
                            <LinkButton title="editor" to="editor" icon={<FiEdit />} />
                            <LinkButton title="color-picker" to="color-picker" icon={<BiColorFill />} />
                            <p className="uppercase text-gray-400 dark:text-gray-400 m-3 mt-4">Charts</p>
                            <LinkButton title="line" to="line" icon={<AiOutlineStock />} />
                            <LinkButton title="area" to="area" icon={<AiOutlineAreaChart />} />

                            <LinkButton title="bar" to="bar" icon={<AiOutlineBarChart />} />
                            <LinkButton title="pie" to="pie" icon={<FiPieChart />} />
                            <LinkButton title="financial" to="financial" icon={<RiStockLine />} />
                            <LinkButton title="color-mapping" to="color-mapping" icon={<BsBarChart />} />
                            <LinkButton title="pyramid" to="pyramid" icon={<GiLouvrePyramid />} />
                            <LinkButton title="stacked" to="stacked" icon={<AiOutlineBarChart />} />
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

interface ILinkButtonProps {
    to: string;
    title: string;
    icon: ReactNode;
}
function LinkButton({ icon, title, to }: ILinkButtonProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-base m-2 ${
                    isActive ? "text-white" : "text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray"
                }`
            }>
            {icon} <span className="capitalize">{title}</span>
        </NavLink>
    );
}
