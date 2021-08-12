import React, { Component } from 'react';
import { Table,Form,Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import {
    Link
  } from 'react-router-dom'
  import { Navbar, Nav } from 'react-bootstrap'

class CourseSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData:false,
            lastSearch:"",
        }
    }
    
    search(key) {
        console.warn(key)
        this.setState({lastSearch:key})
        fetch("http://localhost:8082/coursebyid/"+cid).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if(resp.length>0)
                {
                    this.setState({searchData:resp,noData:false})
                }
                else
                {
                    this.setState({noData:true,searchData:null})
                }
            })
        })
    }
    // delete(id)
    // {
    //     fetch('http://localhost:8082/deletecourse/'+id,
    //     {
    //         method: "DELETE",
    //         // headers:{
    //         //     'Content-Type':'application/json'
    //         // },
    //     }).then((result)=>{
    //         result.json().then((resp)=>{
    //             alert("Course has heen Deleted")
    //             this.search(this.state.lastSearch)
    //         })
    //     })
    // }
    render() {
        return (
            <Container>
                <Navbar />
                <h1>Course Search</h1>
               
                <Form.Control type="text"  onChange={(event) => this.search(event.target.value)}   placeholder="Search course" />
                <div>
                    {
                        this.state.searchData?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>cid</th>
                                        <th>cname</th>
                                        <th>course_details</th>
                                        <th>cfee</th>
                                    </tr>
                                </thead>
                                <tbody>
                            {
                                this.state.searchData.map((item)=>
                                <tr>
                                                <td>{item.cid}</td>
                                                <td>{item.cname}</td>
                                                <td>{item.course_details}</td>
                                                <td>{item.cfee}</td>
                                                <td><Link to={"/view/"+item.cid}><FontAwesomeIcon icon={faEdit} color="orange" /> </Link>
                                                <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="green" /> </span>
                                                </td>
                                            </tr>
                                    )
                            }
                            </tbody>
                            </Table>
                        </div>
                        :""
                    }
                    {
                        this.state.noData?<h3>No Data Found</h3>:null
                    } 
                </div>

            </Container>
        );
    }
}

export default CourseSearch;