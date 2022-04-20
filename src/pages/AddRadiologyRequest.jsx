import React, { useState } from "react";

import Breadcrumbs from "../../src/components/Common/Breadcrumb";

import Select from "react-select";
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
import radiologyimg from '../assets/images/radiology.png'


const optionsRadiology = [
    {
      label: "Services",
      options: [
        { label: "X Ray", value: "X Ray" },
        { label: "Mammogram", value: "Mammogram" },
        { label: "CT Scan", value: "CT Scan" },
        { label: "MRI", value: "MRI" },
        { label: "Ultra Sound", value: "Ultra Sound" },
        { label: "RFA", value: "RFA" },
        { label: "Biplane Angiography", value: "Biplane Angiography" },
      ],
    },
  ];



const AddRadiologyRequest = () => {
  // States for Input fields...
  // Will be shared to the backend via axios
  const [patientid,setPatientid] = useState(null);
  const [radiologyservice,setRadiologyservice] = useState(null);

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
        <Breadcrumbs title="Service" breadcrumbItem="Radiology" />

        <Row>
          <Col xl="6">
            <Card>
              <CardBody>
              <div className="mt-4 mt-md-0">
              <img className="rounded me-2" alt="" width="200" src={radiologyimg} />
            </div>
                <h4 className="card-title"> Radiology Service Request - Normal</h4>
                <p className="card-title-desc">
                  Enter the id of the patient to add radiology service.
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


              
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <Label>Select Service</Label>
                        <Select
                          value={radiologyservice}
                          onChange={setRadiologyservice}
                          options={optionsRadiology}
                          classNamePrefix="select2-selection"
                        />
                      </div>
                    </Col>

                  </Row>



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

export default AddRadiologyRequest;
