import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

class PostAProblem extends Component {
  render() {
    return (
      <React.Fragment>
        <PostProblemBackground>
          <Container fluid>
            <div className="post-your-problem-topic">
              <Row>
                <h4>Post the problem related to your computer</h4>
              </Row>
            </div>
            <div className="post-your-problem-form">
              <Row>
                <Col xs="10">
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Problem ID: {generateID()} </Form.Label>
                      <br />
                      <Form.Label> (This is auto-generated) </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>What is your Operating system</Form.Label>
                      <Form.Control as="select">
                        <option>Please select</option>
                        <option>Windows</option>
                        <option>MacOS</option>
                        <option>Linux</option>
                        <option>Other</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                      <Form.Label>What is your Computer Model</Form.Label>
                      <Form.Control
                        type="model"
                        placeholder="Enter your computer model"
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>What is your problem?</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Describe your problem here"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Container>
        </PostProblemBackground>
      </React.Fragment>
    );
  }
}

export default PostAProblem;

function generateID() {
  return Math.floor(Math.random() * 10000);
}

const PostProblemBackground = styled.form`
  .post-your-problem-topic {
    padding-top: 4rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    margin-top: 1rem;
    background-color: rgb(66, 245, 203);
  }

  .post-your-problem-form {
    padding-top: 3rem;
    padding-bottom: 4rem;
    padding-left: 2rem;
  }
`;
