import ReactDOM from "react-dom/client";
import { App } from "./App";

const toofly = document.getElementById("fly");
const roo = ReactDOM.createRoot(toofly);
roo.render(<App />);
