import React from 'react'
import { Outlet } from "react-router-dom";
import SidebarStudent from '../SidebarStudent';


function DashbordStudents() {
  return (
   <>
   <div>
    <SidebarStudent/>
    <div>

    </div>
    <Outlet />
   </div>
   </>
  )
}

export default DashbordStudents
