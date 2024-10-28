import React from 'react'
import { Outlet } from "react-router-dom";
import SidebarTeacher from '../SidebarTeacher'

function TeachersDasbords() {
  return (
   <>
   <div>
    <SidebarTeacher/>
<div>
    
</div>
    
    <Outlet />

   </div>
   </>
  )
}

export default TeachersDasbords
