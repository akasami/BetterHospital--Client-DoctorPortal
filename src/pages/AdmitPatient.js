import React, { useState } from "react";

import Breadcrumbs from "../../src/components/Common/Breadcrumb";

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

const optionGroup = [
  {
    label: "Gender",
    options: [
      { label: "♂️ Male", value: "Male" },
      { label: "♀️ Female", value: "Female" },
      { label: "Others", value: "Others" },
    ],
  },
];

const optionBachelors = [
  {
    label: "Bs",
    options: [
      { label: "Bachelor of Medicine and Surgery", value: "Bachelor of Medicine and Surgery" },
      { label: "Bachelor of Dental Surgery", value: "Bachelor of Dental Surgery" },
      { label: "Others", value: "Others" },
    ],
  },
];

const optionSpecialization = [
  {
    label: "MD",
    options: [
      { label: "Aerospace Medicine", value: "Aerospace Medicine" },
      { label: "Immunohematology and Blood transfusion", value: "Immunohematology and Blood transfusion" },
      { label: "Others", value: "Others" },
    ],
  },
];


const AdmitPatient = () => {
  // States for Input fields...
  // Will be shared to the backend via axios
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [cnic, setCnic] = useState(null);
  const [phone, setPhone] = useState(null);
  const [age, setAge] = useState(null);
  const [dob, setDob] = useState(null);

  // Select Menu that captures Gender in a state..
  const [selectedGroup, setselectedGroup] = useState(null);


  const [bachelor,setBachelor] = useState(null);
  const [specialization,setSpecialization] = useState(null);  


  function handleSelectGroup(selectedGroup) {
    console.log("captured:", selectedGroup);
    setselectedGroup(selectedGroup);
  }

  function handleSubmit(e) {
    e.preventDefault();

    //console.log("Sending data...",selectedGroup.value);
    console.log(
      "Date of Birth = ",
      dob[0].getMonth(),
      dob[0].getDate(),
      dob[0].getFullYear()
    );
    //console.table(firstname,lastname,cnic,phone,"Gender:",selectedGroup,age,dob);
  }

  //for change tooltip display propery
  function changeHandeler(event, eleId) {
    if (event.target.value !== "")
      document.getElementById(eleId).style.display = "none";
    else document.getElementById(eleId).style.display = "block";
  }

  const [profilepic,setProfilepic]= useState(img4);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setProfilepic(reader.result);
        //this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };



  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Patient" breadcrumbItem="Admit Patient" />

        <Row>
          <Col xl="8">
            <Card>
              <CardBody>
                <h4 className="card-title"> Bio Information - Normal</h4>
                <p className="card-title-desc">
                  Enter the information given below to admit the patient.
                </p>

 
                <AvForm className="needs-validation">
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <Label htmlFor="validationCustom01">Patient Id</Label>
                        <AvField
                          name="firstname"
                          placeholder="First name"
                          onChange={(e) => setFirstname(e.target.value)}
                          type="text"
                          errorMessage="Enter First Name"
                          className="form-control"
                          validate={{ required: { value: true } }}
                          id="validationCustom01"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <Label htmlFor="validationCustom01">
                          Room Id
                        </Label>
                        <AvField
                          name="firstname"
                          placeholder="34"
                          onChange={(e) => setCnic(e.target.value)}
                          type="text"
                          className="form-control"
                          validate={{ required: { value: true } }}
                          id="validationCustom01"
                        />
                      </div>
                    </Col>
                  </Row>




                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />{" "}
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                  <Button onClick={handleSubmit} color="primary" type="submit">
                    Register
                  </Button>

                </AvForm>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    </React.Fragment>
  );
};

export default AdmitPatient;
