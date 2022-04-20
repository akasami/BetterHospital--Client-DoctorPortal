import React, { useState } from "react";

import Breadcrumbs from "../../src/components/Common/Breadcrumb";
import LatestTransaction from "./Dashboard/latest-transaction";

import {
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
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

import Select from "react-select";

//import img4 from "../../assets/images/small/img-4.jpg"
import img4 from "../../src/assets/images/small/doctorimg_avatar.jpg";

const PatientData = {
  
    "firstname":"Sameed",
    "lastname":"Zahoor",
    "CNIC":"33100-1234567-1",
    "phone":"03001234567",
    "age":"21",
    "gender":"Male",
    "admit": true

}




const ViewPatients = () => {
  // States for Input fields...
  // Will be shared to the backend via axios


  function handleSubmit(e) {
    e.preventDefault();

  }

  //for change tooltip display propery
  function changeHandeler(event, eleId) {
    if (event.target.value !== "")
      document.getElementById(eleId).style.display = "none";
    else document.getElementById(eleId).style.display = "block";
  }





  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Patient" breadcrumbItem="Your Patient" />

        <Row>


            <LatestTransaction/>


        </Row>

      </div>
    </React.Fragment>
  );
};

export default ViewPatients;
