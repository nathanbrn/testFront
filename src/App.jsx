import { ToastContainer } from "react-toastify"
import { Router } from "./routes"
import "react-toastify/dist/ReactToastify.min.css"

export function App() {
  return(
    <>
      <Router />
      <ToastContainer />
    </>
  )
}
