import React, { useState } from "react"

import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Label,
  Input,
} from "reactstrap";
import Breadcrumbs from "../../src/components/Common/Breadcrumb";
import appointmentpic from '../../src/assets/images/appointment.png';


const AddAppointment = () =>{

    const [customchk, setcustomchk] = useState(true)
    const [toggleSwitch, settoggleSwitch] = useState(true)
  

    return (
        <React.Fragment>
        <div className="page-content">
  
          <Breadcrumbs title="Appointment" breadcrumbItem="Add Appointment" />
  
          <Row>
            <Col xl="8">
              <Card>
                <CardBody>
                <img className="rounded me-2" alt="" width="400" src={appointmentpic} />
                  

                  <CardTitle className="h4">Appointments</CardTitle>
                  <p className="card-title-desc">
                      Enter the data for the booking process.
                      
                    </p>
           
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Doctor Id
                      </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </Row>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Patient Id
                      </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </Row>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-date-input"
                      className="col-md-2 col-form-label"
                    >
                      Date
                      </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="date"
                        defaultValue="2019-08-19"
                        id="example-date-input"
                      />
                    </div>
                  </Row>
                 
                  
                  <Row className="mb-3">
                  
                    <label
                      htmlFor="example-time-input"
                      className="col-md-2 col-form-label"
                    >
                      Start Time
                      </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="time"
                        defaultValue="13:45:00"
                        id="example-time-input"
                      />
                    </div>
                  </Row>
                    

                  <Row className="mb-3">
                    <label
                      htmlFor="example-time-input"
                      className="col-md-2 col-form-label"
                    >
                      End Time
                      </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="time"
                        defaultValue="13:45:00"
                        id="example-time-input"
                      />
                    </div>
                  </Row>                  


                </CardBody>
              </Card>
            </Col>
          </Row>
  
  
  
        </div>
      </React.Fragment>
    )
}

export default AddAppointment;