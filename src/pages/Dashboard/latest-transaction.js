import React, { useEffect, useState } from "react"
import { Card, CardBody, Table, CardTitle, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap"
import { Link } from "react-router-dom"

const PatientData = [
    
    {
    "firstname":"Sameed",
    "lastname":"Zahoor",
    "CNIC":"33100-1234567-1",
    "phone":"03001234567",
    "age":"21",
    "gender":"Male",
    "bloodgroup":"O+",
    "admit": "true"
    },
    {
        "firstname":"Tamveel",
        "lastname":"Mehmood",
        "CNIC":"33100-1234567-1",
        "phone":"03001114567",
        "age":"21",
        "gender":"Female",
        "bloodgroup":"O+",
        "admit": "false"
    }

]

const PatientLineItem = (props) => {

    const [admitted,setAdmitted] = useState(props.patientinfo.admit);

    useEffect ( () => {
        console.log("Admit",props.patientinfo.admit)
        console.log("🚀 ~ file: latest-transaction.js ~ line 37 ~ useEffect ~ (admitted", (admitted) )
            if(props.patientinfo.admit =="true"){
                
                setAdmitted(true)
            } else {
                setAdmitted(false)
            }
    })


    return (
        <tr>
        
        <td>{props.patientinfo.firstname} {props.patientinfo.lastname}</td>
        <td>{props.patientinfo.gender} </td>
        <td>{props.patientinfo.age} </td>
        <td>{props.patientinfo.phone}</td>
        <td>{props.patientinfo.bloodgroup}</td>
        {
           admitted? <td><span className="badge badge-soft-warning font-size-12">Admitted</span>
</td>:<td><span className="badge badge-soft-success font-size-12">Not Admitted</span>
</td>
        }
        <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
        </tr>       
    )
}

{/* <tr>
<td>15/01/2020</td>
<td>{props.patientinfo.firstname} {props.patientinfo.lastname}</td>
<td>{props.patientinfo.gender} </td>
<td>{props.patientinfo.phone}</td>
<td><span className="badge badge-soft-success font-size-12">Paid</span>
</td>
<td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
</tr>   */}


const LatestTransaction = () => {
    return (
        <Col lg={8}>
            <Card>
                <CardBody>
                    <CardTitle className="h4 mb-4">Latest Appointments</CardTitle>
                    <div className="table-responsive">
                        <Table className="table-centered">
                            <thead>
                                <tr>
                                    
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Blood Group</th>
                                    <th scope="col" colSpan="2">Hospital Admit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    PatientData.map((patientinfo)=>{
                                        return (<PatientLineItem patientinfo={patientinfo} />);
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                    <div className="mt-3">
                        <Pagination className="pagination pagination-rounded justify-content-center mb-0">
                            <PaginationItem>
                                <PaginationLink to="#">Previous</PaginationLink>
                            </PaginationItem>
                            <PaginationItem><PaginationLink to="#">1</PaginationLink></PaginationItem>
                            <PaginationItem className="active"><PaginationLink to="#">2</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">Next</PaginationLink></PaginationItem>
                        </Pagination>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default LatestTransaction