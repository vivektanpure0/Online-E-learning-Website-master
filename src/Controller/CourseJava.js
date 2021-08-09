import React, { Component }  from 'react';
import axios from "axios";
import { useState } from 'react';
//import AuthService from "../services/auth.service";

let CourseJava = (props) => {
    const [courseList, setCourseList] = useState([]); // from axios
    //const API_URL = "http://localhost:8082/";

    
    const getallcourses = (e) => {
        console.log();
        axios.get(`/getallcourses`)
            .then((response) => {
                setCourseList(response.data);
            }).catch(error => {
                console.log(error.message)
            });
    }
    return (
        <div>
            {/* <p>CourseJava Component</p> */}
                       <div>
                    {/* <p>Get all Courses data </p> */}
                    <button type="submit" className="btn btn-primary" onClick={getallcourses}>Get All Courses</button>
                    {/* <p>All Courses Data</p> */}
                    <div> {courseList.map(c => <p> {c.id}, {c.name} {c.details} {c.fee} </p>)} </div>
            </div>

        </div>
       
    )
}
export default CourseJava;



// import axios from "axios";
// import { useState } from 'react';

// let JavaData = (props) => {
//     const [empList, setEmpList] = useState([]); // from axios
//     // const [parentEmp, setParentEmp] = useState({}); // from props  
//     // const [parentEmpHike, setParentEmpHke] = useState(0); // from props 
//     //const [childEmp, setChildEmp] = useState({}); // child state   
//     // const [emp, setEmp] = useState({}); // from axios 

//     // initilize states to prevent undefined error, in case used these fields anywhere else in future 
//     // useEffect(() => {
//     //     setParentEmp(props.parentEmp); // 4
//     //     setParentEmpHke(props.parentEmpHike);
//     //     setChildEmp({
//     //         mid: 301,
//     //         mname: 'Tonu',
//     //         memail: 'tonu@gmail.com'
//     //     }
//     //     );
//     //     setEmp({
//     //         mid: 0,
//     //         mname: '',
//     //         memail: ''
//     //     }
//     //     );

//     // }, []);

//     // const onTrigger = () => {
//     //     props.parentCallback(childEmp);
//     // };

//     // const handleEmployee = (event) => {
//     //     console.log(emp.mid);
//     //     setEmp({
//     //         ...emp,
//     //         [event.target.name]: event.target.value
//     //     });
//     // };

//     const getallmoderator = (e) => {
//         console.log();
//         axios.get(`/getallmoderator`)
//             .then((response) => {
//                 setEmpList(response.data);
//             }).catch(error => {
//                 console.log(error.message)
//             });
//     }

//     return (
//         <div>
//             <p>JavaData Component</p>
//             {/* <p>axios {emp.mname}</p>
//             <p>child {parentEmp.mname}</p>
//             <p> child {parentEmpHike} </p> */}
//             {/* <button onClick={onTrigger}>Pass child emp to parent</button> */}
//             <div>
//                     <p>Get all Moderator data </p>
//                     <button type="submit" className="btn btn-primary" onClick={getallmoderator}>Get All Moderator</button>
//                     <p>All Moderator Data</p>
//                     <div> {empList.map(e => <p> {e.mid}, {e.mname} {e.memail} </p>)} </div>
//             </div>

//         </div>
       
//     )
// }
// export default JavaData;