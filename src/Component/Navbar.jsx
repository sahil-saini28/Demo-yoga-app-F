import Modal from "./Modal"
import Singup from "./Pages/Singup"

import { Link } from "react-router-dom"
import Signin from "./Pages/Singin"
function Navbar() {
  return (
    <div>
      {/* <Signup></Signup> */}
      <div className="  navbar bg-base-100">
         <a className=" btn text-2xl decoration-sky-600">Demo Yoga app</a><Modal></Modal>
  <div className="flex-1">
   
   
  </div> 
  <div className="flex-none gap-2">
  {/* <span className="" ><Link to="/singup">Singup</Link></span> */}
  <Singup></Singup>
  <Signin></Signin>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            
          </a>
        </li>
        <li><a>login</a></li>
        <li><a>My Bookings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar
