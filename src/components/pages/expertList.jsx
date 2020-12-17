import React, { Component } from "react";
import {
  Container,
  Row,
  Card,
  CardDeck,
  Col,
  Badge,
  Button,
} from "react-bootstrap";
import styled from "styled-components";

class ExpertList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ExpertContainerStyle>
          <div className="expert-container">
            <Container fluid>
              <Row className="justify-content-md-center">
                <Col xs="10">
                  <CardDeck>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="/images/experts/expert1.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Bill Gates</Card.Title>
                        <Card.Text>
                          This is the expert's description. I am a rpofessional
                          PC maintenace technicial with 50 years of
                          experience...
                        </Card.Text>
                        <Card.Link href="#">Learn More</Card.Link>
                        <br />
                        <br />
                        <Button variant="primary">Hire</Button>
                      </Card.Body>
                      <Card.Footer>
                        <p>
                          Ratings: <Badge variant="success"> {"5450"}</Badge>
                        </p>
                      </Card.Footer>
                    </Card>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="/images/experts/expert2.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Jack Ma</Card.Title>
                        <Card.Text>
                          This is the expert's description. I am a rpofessional
                          PC maintenace technicial with 50 years of
                          experience...
                        </Card.Text>
                        <Card.Link href="#">Learn More</Card.Link>
                        <br />
                        <br />
                        <Button variant="primary">Hire</Button>
                      </Card.Body>
                      <Card.Footer>
                        <p>
                          Ratings: <Badge variant="success"> {"3670"}</Badge>
                        </p>
                      </Card.Footer>
                    </Card>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="/images/experts/expert3.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Steve Jobs</Card.Title>
                        <Card.Text>
                          This is the expert's description. I am a rpofessional
                          PC maintenace technicial with 50 years of
                          experience...
                        </Card.Text>
                        <Card.Link href="#">Learn More</Card.Link>
                        <br />
                        <br />
                        <Button variant="primary">Hire</Button>
                      </Card.Body>
                      <Card.Footer>
                        <p>
                          Ratings: <Badge variant="success"> {"1450"}</Badge>
                        </p>
                      </Card.Footer>
                    </Card>
                  </CardDeck>
                </Col>
              </Row>
            </Container>
          </div>
        </ExpertContainerStyle>
      </React.Fragment>
    );
  }
}

export default ExpertList;

const ExpertContainerStyle = styled.section`
  .expert-container {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;
