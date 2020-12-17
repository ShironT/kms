import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  Badge,
  Row,
  Pagination,
  Button,
} from "react-bootstrap";
import styled from "styled-components";

let items = [];
let active = 1;

for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

class ProblemList extends Component {
  render() {
    return (
      <React.Fragment>
        <CardStyle>
          <div
            style={{ paddingTop: "4rem", paddingBottom: "3rem" }}
            className="card-container"
          >
            <Container fluid>
              {/*Card 1 */}
              <div className="one-card">
                <Row className="justify-content-md-center">
                  <Card style={{ width: "70rem" }}>
                    <Card.Body>
                      <Card.Title>
                        System time is incorrect after a restart
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Problem ID: 1524
                      </Card.Subtitle>
                      <Card.Text>
                        System time is not correct after a restart in my
                        computer. It's a windows 7 computer and the model is HP
                      </Card.Text>
                      <Card.Link href="#">Read more</Card.Link>
                      <Card.Link href="#">
                        {" "}
                        {
                          <Button>
                            <Link
                              style={{ color: "white" }}
                              to="/solution-form"
                            >
                              Write a Solution
                            </Link>
                          </Button>
                        }{" "}
                      </Card.Link>
                    </Card.Body>
                    <Card.Footer>
                      {
                        <Badge pill variant="warning">
                          <a href="/">Solutions: {"3"}</a>
                        </Badge>
                      }{" "}
                    </Card.Footer>
                  </Card>
                </Row>
              </div>

              {/*Card 2 */}
              <div className="one-card">
                <Row className="justify-content-md-center">
                  <Card style={{ width: "70rem" }}>
                    <Card.Body>
                      <Card.Title>My Dell laptop is slow</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Problem ID: 4268
                      </Card.Subtitle>
                      <Card.Text>
                        Since last week my computer became very slow. Now it
                        takes about 5 minutes to startup and always freeze when
                        running software. I have a virus guard running and it is
                        up to dat. Therefore, I don't think this is due to a
                        virus.
                      </Card.Text>
                      <Card.Link href="#">Read more</Card.Link>
                      <Card.Link href="#">
                        {" "}
                        {
                          <Button>
                            <Link
                              style={{ color: "white" }}
                              to="/solution-form"
                            >
                              Write a Solution
                            </Link>
                          </Button>
                        }{" "}
                      </Card.Link>
                    </Card.Body>
                    <Card.Footer>
                      {
                        <Badge pill variant="warning">
                          <a href="/">Solutions: {"4"}</a>
                        </Badge>
                      }{" "}
                    </Card.Footer>
                  </Card>
                </Row>
              </div>
            </Container>
          </div>
          <div className="pagination-section">
            <Pagination size="sm">{items}</Pagination>
          </div>
        </CardStyle>
      </React.Fragment>
    );
  }
}

export default ProblemList;

const CardStyle = styled.section`
  .one-card {
    padding-top: 1rem;
  }

  .pagination-section {
    padding-left: 4rem;
  }
`;
