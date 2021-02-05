import React, { Component } from "react";
import CarouselComponent from "./CarouselComponent";
import { Row, Col, Container, Button } from "react-bootstrap";

class BuyersPage extends Component {
  render() {
    return (
      <div className="allPageSize">
        <br />
        <Container fluid>
          <Row>
            <Col md={6} className="fixedHeightColumn">
              <h1 style={{ textAlign: "center" }}>Buyers Page</h1>
              <div className="allPageSizeInner">
                <p className="p-2">
                  In ancient manuscripts, another means to divide sentences into
                  paragraphs was a line break (newline) followed by an initial
                  at the beginning of the next paragraph. An initial is an
                  oversized capital letter, sometimes outdented beyond the
                  margin of the text. This style can be seen, for example, in
                  the original Old English manuscript of Beowulf. Outdenting isl
                  ornamentation, a English manuscript of Beowulf. Outdenting is
                  still used in English typography, though not commonly.[3]
                  Modern English typography usually indicates a new paragraph by
                  indenting the first line. This style can be seen in the
                  (handwritten) United States Constitution from 1787. For
                  additional ornamentation, a English manuscript of Beowulf.
                  Outdenting is still used in English typography, though not
                  commonly.[3] Modern English typography usually indicates a new
                  paragraph by indenting the first line. This style can be seen
                  in the (handwritten) United States Constitution from 1787. For
                  additional ornamentation, a hedera leaf or other symbol can be
                  added to the inter-paragraph white space, or put in the
                  indentation space. A second common modern English style is to
                  use no indenting, but add verticaletimes outdented beyond the
                  margin of the text. This style can be seen, for example, in
                  the original Old English manuscript of Beowulf. Outdenting is
                  still used in English typography, though not commonly.[3]
                  Modern English typography usually indicates a new paragraph by
                  indenting the first line. This style can be seen in the
                  (handwritten) United States Constitution from 1787. For
                  additional ornamentation, a hedera leaf or othe white space to
                  create "block paragraphs." On a typewriter, a double carriage
                  return produces a blank line for this purpose; professional
                  typesetters (or word processing software) may put in an
                  arbitrary vertical space by adjusting leading. This style is
                  very common in electronic formats, such as on the World Wide
                  Web and email. Wikipedia itself employs this format.[
                </p>
              </div>
              <br />
              <div className="wrapper2">
                <Button
                  variant="default"
                  className="customButton"
                  style={{
                    borderStyle: "groove",
                    borderColor: "black",
                    borderWidth: "2px",
                  }}
                >
                  <span style={{ color: "black", fontSize: "15px" }}>
                    J O I N
                  </span>
                </Button>
              </div>
            </Col>

            <Col md={6} className="containerMainCrousal">
              <div className="childMainCrousal" style={{ height: "80vh" }}>
                <CarouselComponent />
              </div>
            </Col>
            {/* <Col md={6} className="paddingApplyLeft containerMainCrousal">
              <div className="childMainCrousal">
                <CarouselComponent />
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default BuyersPage;
