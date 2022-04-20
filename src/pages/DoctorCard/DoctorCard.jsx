import React, { useState } from "react";

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Label,
  Input,
  InputGroup,
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
  CardColumns,
  CardGroup,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";
//import img2 from "../../assets/images/small/img-2.jpg"
//import img2 from '../../src/assets/images/small/img-2.jpg';
import img2 from "../../assets/images/sirzohaib.JPG";

const DoctorCard = ({ props }) => {
  // States for Input fields...
  // Will be shared to the backend via axios

  return (
    <React.Fragment>
      <Col mg={12} lg={6}>
        <Card>
          <center>
          
            {" "}
            <div className="mt-4 mt-md-0">
              <img className="rounded me-2" alt="" width="200" src={img2} />
            </div>
          </center>

          <CardBody>
            <CardTitle className="h4 mt-0">Doctor's Information </CardTitle>

            <div className="table-responsive">
              <Table className="table mb-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>
                      {props.firstname} {props.lastname}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gender</td>
                    <td>{props.gender}</td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>{props.age}</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>{props.phone}</td>
                  </tr>
                  <tr>
                    <td>CNIC</td>
                    <td>{props.CNIC}</td>
                  </tr>

                  <tr>
                    <td>Birth Date</td>
                    <td>{props.dob}</td>
                  </tr>

                  <br />
                  <CardTitle className="h4 mt-0">Rating </CardTitle>
                  <tr>
                    <td>Score</td>
                    <td>⭐⭐⭐⭐</td>
                  </tr>
                  <br />
                  <CardTitle className="h4 mt-0">Education </CardTitle>
                  <tr>
                    <td>Bachelor</td>
                    <td>Bachelor of Medicine and Surgery</td>
                  </tr>
                  <tr>
                    <td>Specialization</td>
                    <td>MD Immunohematology and Blood transfusion</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>

          <CardBody>
            <Link to="#" className="card-link">
              Fix an Appointment
            </Link>{" "}
            <Link to="#" className="card-link">
              Update Info
            </Link>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default DoctorCard;
