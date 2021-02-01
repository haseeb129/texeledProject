import React, { Component } from "react";
import CarouselComponent from "./CarouselComponent";
import { Row, Col, Container, Button } from "react-bootstrap";
class BuyersPage extends Component {
  render() {
    return (
      <div>
        <br />
        <Container fluid>
          <Row>
            <Col md={6}>
              <h1 style={{ textAlign: "center" }}>Buyers Page</h1>
              <p className="p-2">
                In ancient manuscripts, another means to divide sentences into
                paragraphs was a line break (newline) followed by an initial at
                the beginning of the next paragraph. An initial is an oversized
                capital letter, sometimes outdented beyond the margin of the
                text. This style can be seen, for example, in the original Old
                English manuscript of Beowulf. Outdenting is still used in
                English typography, though not commonly.[3] Modern English
                typography usually indicates a new paragraph by indenting the
                first line. This style can be seen in the (handwritten) United
                States Constitution from 1787. For additional ornamentation, a
                hedera leaf or other symbol can be added to the inter-paragraph
                white space, or put in the indentation space. A second common
                modern English style is to use no indenting, but add vertical
                whitand email. Wikipedia itself employs this format.[
              </p>
            </Col>

            <Col md={6}>
              <CarouselComponent />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BuyersPage;
