import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "../src/styles/defaults.css"
import "../src/styles/index.css"
import "../src/styles/responsive.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
