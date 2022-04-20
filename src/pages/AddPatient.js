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


const AddPatient = () => {
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
        <Breadcrumbs title="Patient" breadcrumbItem="Register Patient" />

        <Row>
          <Col xl="8">
            <Card>
              <CardBody>
                <h4 className="card-title"> Bio Information - Normal</h4>
                <p className="card-title-desc">
                  Enter the information of the person in the given below form.
                </p>

 
                <AvForm className="needs-validation">
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <Label htmlFor="validationCustom01">First name</Label>
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
                    <Col md="6">
                      <div className="mb-3">
                        <Label htmlFor="validationCustom02">Last name</Label>
                        <AvField
                          name="lastname"
                          placeholder="Last name"
                          type="text"
                          onChange={(e) => setLastname(e.target.value)}
                          className="form-control"
                          validate={{ required: { value: true } }}
                          id="validationCustom02"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <Label htmlFor="validationCustom01">
                          CNIC -Govt Id
                        </Label>
                        <AvField
                          name="firstname"
                          placeholder="*****-*******-*"
                          onChange={(e) => setCnic(e.target.value)}
                          type="text"
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
                        <Label htmlFor="validationCustom01">Phone No.</Label>
                        <AvField
                          name="firstname"
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="****-*******"
                          type="text"
                          className="form-control"
                          validate={{ required: { value: true } }}
                          id="validationCustom01"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="3">
                      <div className="mb-3">
                        <AvField
                          className="mb-3"
                          name="digits"
                          label="Age  "
                          placeholder="21"
                          type="number"
                          onChange={(e) => setAge(e.target.value)}
                          errorMessage="Enter Only Digits"
                          validate={{
                            required: { value: true },
                            pattern: {
                              value: "^[0-9]+$",
                              errorMessage: "Only Digits",
                            },
                          }}
                        />
                      </div>
                    </Col>

                    <Col md="3">
                      <div className="mb-3">
                        <Label>Gender</Label>
                        <Select
                          value={selectedGroup}
                          onChange={setselectedGroup}
                          options={optionGroup}
                          classNamePrefix="select2-selection"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="3">
                      <FormGroup className="mb-4">
                        <Label>Date of Birth</Label>
                        <InputGroup>
                          <Flatpickr
                            value={dob}
                            onChange={setDob}
                            className="form-control d-block"
                            placeholder="dd M,yyyy"
                            options={{
                              mode: "range",
                              dateFormat: "Y-m-d",
                            }}
                          />
                        </InputGroup>
                      </FormGroup>
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
                    Submit form
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

export default AddPatient;
