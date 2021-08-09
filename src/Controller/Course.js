import React from 'react';
import { useState } from 'react';
import CourseJava from './CourseJava';
// import Counter from './Counter';

//**FUNCTION COMPONANT**

let Course = () => {
    const [courseList, setCourseList] = useState([]); // from axios
    // const [parentcourseList, setParentCourseList] = useState({}); // parent state  
    // const [parentcourseListHike, setParentCourseListHke] = useState(0); // parent state  
    
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


// import React from 'react';
// import { useState, useEffect } from 'react';
// import Javadata from './Javadata';
// // import Counter from './Counter';

// //*FUNCTION COMPONANT*

// let Moderator = () => {
//     const [emp, setEmp] = useState('');
//     const [parentEmp, setParentEmp] = useState({}); // parent state  
//     const [parentEmpHike, setParentEmpHke] = useState(0); // parent state  
//     // const [childEmp, setChildEmp] = useState({}); // from callback    

//     // useEffect(() => {

//     //     setParentEmp({
//     //         mid: 201,
//     //         mname: 'Monu',
//     //         memail: 'monu@gmail.com'
//     //     }
//     //     );

//     //     setParentEmpHke(10);
//     // }, []);

//     // const handleCallback = (childEmpData) => {
//     //     setChildEmp(childEmpData);
//     //     console.log(childEmpData);
//     // }

//     return (
//         <div>
//             <h1 >Moderator Component</h1>
//             {/* <p> parent {parentEmp.mname}</p> */}
//             {/* <p> parent {parentEmpHike}</p> */}
//             {/* <JavaData></JavaData> */}
//             {/* <p>parent {childEmp.name}</p> */}
//             <Javadata
//                 // parentEmp={parentEmp}
//                 // parentEmpHike={parentEmpHike}
//                 // parentCallback={handleCallback}
//             ></Javadata>
//             {/* <Counter></Counter> */}
//         </div>
//     )
// }
// export default Moderator;



