import React from "react";
import { Outlet,Link,NavLink,useNavigate} from "react-router-dom";
import Course1 from "../Course1";
 import Course2 from "../Course2";
 import Dashborad from "../components/Dashboard";
const About=()=>{
const navigate=useNavigate();

 
return(
    <div>
        <h3>hey ! About Component</h3>
        
<NavLink style={ ({isActive})=>{
    return{
        backgroundColor: isActive ? "red" :"orange"
    }
}}   to="/about/course1"     >CourseDetails01

</NavLink>

<NavLink to="/about/course2">CourseDetails02</NavLink>


<button onClick={()=>{
    navigate("/Dashboard", {state:"pakistani"})
}}>    ReturnToDashboard

</button>
        {/* <li><Link to="/about/course1">Coursesdetails </Link></li> */}
        <Outlet/>
    </div>
)
}

export default About;