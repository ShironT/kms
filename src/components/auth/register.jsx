import React, { Component } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import styled from "styled-components";

class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <RegisterBackground>
            <div className="register-form-background">
              <Row className="justify-content-md-center">
                <Col className="register-form-column" xs="7">
                  <div className="register-text">
                    <Row className="justify-content-md-center">
                      <h4>Register</h4>
                    </Row>
                  </div>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="firstName"
                          placeholder="Enter first name"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="lastName"
                          placeholder="Enter last name"
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Form.Row>
                    <fieldset>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                          Register as a
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Check
                            type="radio"
                            label="Victim"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                          />
                          <Form.Check
                            type="radio"
                            label="Expert"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                          />
                        </Col>
                      </Form.Group>
                    </fieldset>

                    <Form.Group id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I agree terms & conditions"
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </RegisterBackground>
        </Container>
      </React.Fragment>
    );
  }
}

export default Register;

const RegisterBackground = styled.form`
  .register-form-background {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .register-form-column {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(59, 123, 235);
  }

  .register-text {
    background-color: rgb(66, 245, 203);
    color: rgb(19, 137, 240);
  }
`;
