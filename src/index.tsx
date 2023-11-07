import ReactDOM from "react-dom/client";
import "src/styles/index.css";
import App from "src/App";
import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "src/contexts/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
);

reportWebVitals();
// https://github.com/adrianhajdin/project_syncfusion_dashboard
// https://www.youtube.com/watch?v=jx5hdo50a2M
