import logo from './logo.svg';
import './App.css';
import Home from "../src/components/Home";
import About from "../src/components/About";
import Course1 from './Course1';
import Course2 from './Course2';
import CourseId from './components/CourseId';
import Contact from "../src/components/Contact";
import Dashboard from "../src/components/Dashboard";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Home" element={<Home/>}/>
      
    {/* <Route path="/About" element={<Navigate replace to="/Contact"/>}/> */}
    <Route path="/About"     element={<About/>} >
         {/* nestedrouting */}
      <Route path="course1"   element={<Course1/>} />
      <Route path="course2"   element={<Course2/>} />
      <Route path=":courseid" element={<CourseId/>} />
      </Route>
           
 <Route path="/Contact" element={<Contact/>}/>
 <Route path="/Dashboard" element={<Dashboard/>} />
   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
