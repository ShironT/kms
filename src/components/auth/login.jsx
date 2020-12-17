import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <LoginBackground>
            <div className="login-form-background">
              <Row className="justify-content-md-center">
                <Col className="login-form-column" xs="5">
                  <div className="login-text">
                    <Row className="justify-content-md-center">
                      <h4>Login</h4>
                    </Row>
                  </div>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I agree terms & conditions"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </LoginBackground>
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;

const LoginBackground = styled.form`
  .login-form-background {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .login-form-column {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(59, 123, 235);
  }

  .login-text {
    background-color: rgb(66, 245, 203);
    color: rgb(19, 137, 240);
  }
`;
