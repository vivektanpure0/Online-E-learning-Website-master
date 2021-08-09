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



