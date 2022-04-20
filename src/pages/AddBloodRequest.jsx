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
import bloodbankimg from '../assets/images/bloodbank.png'


const AddBloodRequest = () => {
  // States for Input fields...
  // Will be shared to the backend via axios
  const [patientid,setPatientid] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (patientid != null ){
        console.table(patientid);
    } else {
        alert("Patient Id Required.");
    }
   
 
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
        <Breadcrumbs title="Blood Bank" breadcrumbItem="Request" />

        <Row>
          <Col xl="8">
            <Card>
              <CardBody>
              <div className="mt-4 mt-md-0">
              <img className="rounded me-2" alt="" width="200" src={bloodbankimg} />
            </div>
                <h4 className="card-title"> Blood Request - Normal</h4>
                <p className="card-title-desc">
                  Enter the id of the patient to add blood request.
                </p>

        
                <AvForm className="needs-validation">
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <Label htmlFor="validationCustom01">Id</Label>
                        <AvField
                          name="firstname"
                          placeholder="Patient Id.."
                          onChange={(e) => setPatientid(e.target.value)}
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
                      Are you sure ?
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                  <Button onClick={handleSubmit} color="primary" type="submit">
                    Submit
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

export default AddBloodRequest;
