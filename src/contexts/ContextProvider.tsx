import { ReactNode, createContext, useContext, useState } from "react";

interface IStateContext {
    sidebar: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    openSidebar: () => void;
}

const StateContext = createContext<IStateContext>({} as IStateContext);
export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [sidebar, setSidebar] = useState<boolean>(true);
    const toggleSidebar = () => setSidebar((prev) => !prev);
    const openSidebar = () => setSidebar(true);
    const closeSidebar = () => setSidebar(false);

    return <StateContext.Provider value={{ closeSidebar, openSidebar, sidebar, toggleSidebar }}>{children}</StateContext.Provider>;
};

export const useContextProvider = (): IStateContext => useContext(StateContext);
