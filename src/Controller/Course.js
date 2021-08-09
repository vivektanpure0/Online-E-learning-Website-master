import React from 'react';
import { useState } from 'react';
import CourseJava from './CourseJava';
// import Counter from './Counter';

//**FUNCTION COMPONANT**

let Course = () => {
    const [courseList, setCourseList] = useState([]); // from axios
    
    return (
        <div>
          
            <CourseJava
                courseList={courseList}
                //parentEmpHike={parentEmpHike}
                // parentCallback={handleCallback}
            ></CourseJava>
            {/* <Counter></Counter> */}
        </div>
    )
}
export default Course;




