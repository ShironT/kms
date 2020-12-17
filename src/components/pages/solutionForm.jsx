import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

class SolutionForm extends Component {
  render() {
    return (
      <React.Fragment>
        <PostSolutionBackground>
          <Container fluid>
            <div className="post-your-solution-topic">
              <Row>
                <h4>Post the the solution here</h4>
              </Row>
            </div>
            <div className="post-your-solution-form">
              <Row>
                <Col xs="10">
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Problem ID: {generateID()} </Form.Label>
                      <br />
                      <Form.Label> Solution ID: {generateID()} </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Main system:</Form.Label>
                      <Form.Control as="select">
                        <option>Select...</option>
                        <option>Motherboard</option>
                        <option>Hard disk drive</option>
                        <option>Power supply unit</option>
                        <option>Cooling system</option>
                        <option>Monitor</option>
                        <option>Keyboard</option>
                        <option>Mouse</option>
                        <option>Sound system</option>
                        <option>Optical drive</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput2">
                      <Form.Label>Component:</Form.Label>
                      <Form.Control type="string" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput3">
                      <Form.Label>Failure Symptom:</Form.Label>
                      <Form.Control type="string" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput4">
                      <Form.Label>Failure Cause:</Form.Label>
                      <Form.Control type="string" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput5">
                      <Form.Label>Diagnostic Action:</Form.Label>
                      <Form.Control type="string" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Maintenance Action:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Type here"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit Solution
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Container>
        </PostSolutionBackground>
      </React.Fragment>
    );
  }
}

export default SolutionForm;

function generateID() {
  return Math.floor(Math.random() * 10000);
}

const PostSolutionBackground = styled.form`
  .post-your-solution-topic {
    padding-top: 4rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    margin-top: 1rem;
    background-color: rgb(152, 240, 19);
  }

  .post-your-solution-form {
    padding-top: 3rem;
    padding-bottom: 4rem;
    padding-left: 2rem;
  }
`;
