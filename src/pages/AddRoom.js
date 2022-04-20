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
      { label: "Common", value: "common" },
      { label: "Vip", value: "vip" },
    ],
  },
];

const optionBachelors = [
  {
    label: "Bs",
    options: [
      {
        label: "Bachelor of Medicine and Surgery",
        value: "Bachelor of Medicine and Surgery",
      },
      {
        label: "Bachelor of Dental Surgery",
        value: "Bachelor of Dental Surgery",
      },
      { label: "Others", value: "Others" },
    ],
  },
];

const optionSpecialization = [
  {
    label: "MD",
    options: [
      { label: "Aerospace Medicine", value: "Aerospace Medicine" },
      {
        label: "Immunohematology and Blood transfusion",
        value: "Immunohematology and Blood transfusion",
      },
      { label: "Others", value: "Others" },
    ],
  },
];

const AddRoom = () => {
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

  const [bachelor, setBachelor] = useState(null);
  const [specialization, setSpecialization] = useState(null);

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

  const [profilepic, setProfilepic] = useState(img4);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfilepic(reader.result);
        //this.setState({profileImg: reader.result})
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Room" breadcrumbItem="Add New" />

        <Row>
          <Col xl="6">
            <Card>
              <CardBody>
                <h4 className="card-title"> Room Information - Normal</h4>
                <p className="card-title-desc">
                  Enter the information of the room in the given below form.
                </p>

                <AvForm className="needs-validation">
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          className="mb-3"
                          name="digits"
                          label="Room  "
                          placeholder="20"
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
                        <Label>Category</Label>
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
                    <Col md="6">
                      <Button color="primary" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </AvForm>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default AddRoom;
