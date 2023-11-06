import { Tooltip } from "antd";
import { FiSettings } from "react-icons/fi";

function SettingButton() {
    return (
        <div className="fixed bottom-4 right-4">
            <Tooltip placement="top" title={"Settings"}>
                <button
                    type="button"
                    className="text-3xl p-3 rounded-full text-white hover:drop-shadow-xl hover:bg-light-gray"
                    style={{ backgroundColor: "blue" }}>
                    <FiSettings />
                </button>
            </Tooltip>
        </div>
    );
}

export default SettingButton;
