import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "../src/styles/defaults.css"
import "../src/styles/index.css"
import "../src/styles/responsive.css"
import App from "./App"
import store from "./redux/store/store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
