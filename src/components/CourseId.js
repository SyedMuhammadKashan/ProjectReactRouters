import React from 'react';
import { useParams } from 'react-router-dom';

const CourseId=()=>{
    //  same name likna as written in route e.g ::courseid
   const { courseid } = useParams(); 
    
    return (
      <div>
        <p>so the params is {courseid}</p>
      </div>
    );
}

export default CourseId;