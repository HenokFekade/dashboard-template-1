import { Tooltip } from "antd";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ILinkButtonProps {
    to: string;
    title: string;
    icon: ReactNode;
}
export default function LinkButton({ icon, title, to }: ILinkButtonProps) {
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

interface INavButtonProps {
    title: string;
    onClick: () => void;
    icon?: ReactNode;
    color: string;
    dotColor?: string;
}

export function NavButton({ color, onClick, title, dotColor, icon }: INavButtonProps) {
    return (
        <Tooltip placement="bottom" title={title}>
            <button style={{ color }} type="button" onClick={onClick} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
                <span style={{ backgroundColor: dotColor }} className="absolute w-2 h-2 rounded-full top-2 right-2"></span>
                {icon}
            </button>
        </Tooltip>
    );
}
