import { Button } from "@/components/ui/button"
import Navber from "./components/layout/Navber"
import { Outlet } from "react-router"

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <div className="max-w-7xl mx-auto px-5">
      <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
