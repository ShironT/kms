import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  InputGroup,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";
import styled from "styled-components";

export class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="home-image">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Image src="images/Picture2.png" fluid />
            </Row>
          </Container>
        </div>
        <div className="search-bar">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col xs="2">
                <div className="search-image">
                  <Image src="/images/home-search-picture1.png" />
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <div className="search-topic">
                <h2>Find a solution for your PC problem</h2>
              </div>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs={10}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Type your problem here"
                    aria-label="Type your problem here"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button variant="dark">Search</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </div>
        <HomeBottomStyle>
          <div className="home-bottom">
            <Container fluid>
              <Row className="justify-content-md-center">
                <Col xs="3">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="/images/home-bottom-picture1.png"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h4>Are you a Victim?</h4>
                      </Card.Title>
                      <Card.Text>
                        Post your PC problem in this system and let the experts
                        worry about it.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs="1"></Col>

                <Col xs="3">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="/images/home-bottom-picture2.png"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h4>Are you an Expert?</h4>
                      </Card.Title>
                      <Card.Text>
                        If you have good knowledge about PC maintenance, here is
                        your chance. Give correct and working sloutions for the
                        problems posted in our system. Collect your points and
                        earn money.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs="1"></Col>

                <Col xs="3">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="/images/home-bottom-picture3.png"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h4>How AI is used?</h4>
                      </Card.Title>
                      <Card.Text>
                        This is an easy to use platform to get solutions for
                        your problems. A PC maintenance knowledge management
                        system is implemented with using ontological modeling.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </HomeBottomStyle>
      </HomeContainer>
    );
  }
}

export default Home;

const HomeContainer = styled.image`
  .home-image {
    padding-bottom: 0rem;
  }

  .search-bar {
    padding-top: 4rem;
    padding-bottom: 4rem;
    background: rgb(33, 176, 181);
  }

  .search-topic {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
`;

const HomeBottomStyle = styled.section`
  .home-bottom {
    padding-top: 6rem;
    padding-bottom: 3rem;
  }
`;
