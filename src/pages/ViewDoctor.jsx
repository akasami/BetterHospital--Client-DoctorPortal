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
import img2 from "../../src/assets/images/small/img-2.jpg";

// Importing the Doctor Card to display the searched doctor
import DoctorCard from "./DoctorCard/DoctorCard";

// Demo data for displaying the searched doctor
var doctordemoinfo = {
  firstname: "Zohaib",
  lastname: "Iqbal",
  CNIC: "33100-1234567-1",
  phone: "03008667620",
  age: "29",
  gender: "Male",
  dob: "2018-8-3",
};

const ViewDoctor = () => {
  // States for Input fields...
  // Will be shared to the backend via axios
  const [doctorid, setDoctorid] = useState(null);
  const [searchfound,setSearchfound] = useState(false);


  function searchbar ( e) {
      setDoctorid(e.target.value);
      setSearchfound(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (doctorid != null) {
      setSearchfound(true);
      console.table(doctorid);
    } else {
      alert("Doctor Id Required.");
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Doctors" breadcrumbItem="View Doctor" />

        <Row>
          <Col xl="4">
            <Card>
              <CardBody>
                <h4 className="card-title"> View Doctor</h4>
                <p className="card-title-desc">
                  Enter the id to View the information required.
                </p>

                <AvForm className="needs-validation">
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="firstname"
                          placeholder="Id.."
                          onChange={searchbar}
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
                      <button
                        onClick={handleSubmit} 
                        type="button"
                        class="btn btn-primary waves-effect waves-light"
                      >
                        <i class="bx bx-search-alt font-size-18 align-middle me-2"></i>{" "}
                        Search
                      </button>
                    </Col>
                  </Row>
                </AvForm>
              </CardBody>
            </Card>
          </Col>
          {searchfound?<DoctorCard props={doctordemoinfo} />:null}    
        </Row>
      </div>
    </React.Fragment>
  );
};

export default ViewDoctor;
