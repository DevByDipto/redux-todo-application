import { Button } from "@/components/ui/button"
import Navber from "./components/layout/Navber"
import { Outlet } from "react-router"

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  )
}

export default App
